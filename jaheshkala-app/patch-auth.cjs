const fs = require('fs');
let content = fs.readFileSync('src/components/AuthModal.tsx', 'utf-8');

// Add imports
if (!content.includes('GoogleLogin')) {
  content = content.replace(
    "import { X, User, Lock, Phone, Mail, UserPlus, LogIn, ShieldAlert, CheckCircle2, Loader2 } from 'lucide-react';",
    "import { X, User, Lock, Phone, Mail, UserPlus, LogIn, ShieldAlert, CheckCircle2, Loader2 } from 'lucide-react';\nimport { GoogleLogin } from '@react-oauth/google';\nimport { jwtDecode } from 'jwt-decode';"
  );
  
  // Create a handler for Google Login
  const googleHandler = `
  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      setIsLoading(true);
      setErrorMsg('');
      const decoded: any = jwtDecode(credentialResponse.credential);
      const email = decoded.email;
      const name = decoded.name;
      const sub = decoded.sub; // unique google ID
      const picture = decoded.picture;

      // Check if user exists by email or sub as username
      let user = await findUserInDb(email, ''); // password doesn't matter here if we check differently
      
      // Let's implement a specific Google Auth logic. Since findUserInDb requires password,
      // we can just bypass it by generating a deterministic password for google users, 
      // or directly upserting to dbService.
      
      // For simplicity, we create a mock user object and use registerUserInDb directly.
      const googleUser: UserType = {
        id: sub,
        fullName: name,
        phone: 'ثبت با گوگل',
        email: email,
        username: email,
        role: 'user',
        createdAt: new Date().toLocaleDateString('fa-IR'),
      };
      
      // We hash a generic password for google users or just save them.
      // In dbService, registerUserInDb takes (user, passwordHash)
      await registerUserInDb(googleUser, 'GOOGLE_AUTH_NO_PASS_' + sub);
      
      setSuccessMsg('ورود با گوگل موفقیت‌آمیز بود.');
      setTimeout(() => {
        onLoginSuccess(googleUser);
        onClose();
      }, 1000);
      
    } catch (err) {
      setErrorMsg('خطا در ارتباط با سرور گوگل.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
`;

  content = content.replace(
    "const handleLogin = async (e: React.FormEvent) => {",
    googleHandler + "\n  const handleLogin = async (e: React.FormEvent) => {"
  );

  const googleBtnLogin = `
            <div className="pt-3 border-t border-purple-900/40">
              <div className="flex justify-center">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() => setErrorMsg('خطا در ورود با گوگل')}
                  theme="filled_black"
                  text="signin_with"
                  shape="rectangular"
                  width="100%"
                />
              </div>
            </div>
  `;
  
  const googleBtnReg = `
            <div className="pt-3 border-t border-purple-900/40">
              <div className="flex justify-center">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() => setErrorMsg('خطا در ثبت‌نام با گوگل')}
                  theme="filled_black"
                  text="signup_with"
                  shape="rectangular"
                  width="100%"
                />
              </div>
            </div>
  `;

  content = content.replace(
    "            <button\n              id=\"submit-login-btn\"",
    googleBtnLogin + "\n            <button\n              id=\"submit-login-btn\""
  );
  
  content = content.replace(
    "            <button\n              id=\"submit-register-btn\"",
    googleBtnReg + "\n            <button\n              id=\"submit-register-btn\""
  );

  fs.writeFileSync('src/components/AuthModal.tsx', content);
}
