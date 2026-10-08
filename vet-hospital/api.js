// API & State helper for Veterinary Faculty Hospital
const API_BASE = '/api/vet';

export async function fetchDepartments() {
  try {
    const res = await fetch(`${API_BASE}/departments`);
    if (res.ok) {
      const data = await res.json();
      return data.departments || [];
    }
  } catch (e) {
    console.warn('API error fetching departments:', e);
  }
  return [];
}

export async function fetchProfessors(departmentId = '', status = '') {
  try {
    const query = new URLSearchParams();
    if (departmentId) query.set('department', departmentId);
    if (status) query.set('status', status);
    else query.set('all', '1');
    const res = await fetch(`${API_BASE}/professors?${query.toString()}`);
    if (res.ok) {
      const data = await res.json();
      return data.professors || [];
    }
  } catch (e) {
    console.warn('API error fetching professors:', e);
  }
  return [];
}

export async function registerProfessor(profData) {
  try {
    const res = await fetch(`${API_BASE}/professors/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profData),
    });
    return await res.json();
  } catch (e) {
    return { success: false, error: e.message };
  }
}

export async function verifyProfessor(professorId, status, visitFee, badges) {
  try {
    const res = await fetch(`${API_BASE}/professors/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ professorId, status, visitFee, badges }),
    });
    return await res.json();
  } catch (e) {
    return { success: false, error: e.message };
  }
}

export async function runAiTriage(triageData) {
  try {
    const res = await fetch(`${API_BASE}/ai-triage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(triageData),
    });
    return await res.json();
  } catch (e) {
    return { success: false, error: e.message };
  }
}

export async function bookAppointment(appointmentData) {
  try {
    const res = await fetch(`${API_BASE}/appointments/book`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointmentData),
    });
    return await res.json();
  } catch (e) {
    return { success: false, error: e.message };
  }
}

export async function fetchAppointments() {
  try {
    const res = await fetch(`${API_BASE}/appointments`);
    if (res.ok) {
      const data = await res.json();
      return data.appointments || [];
    }
  } catch (e) {
    console.warn('API error fetching appointments:', e);
  }
  return [];
}

export async function updateAppointmentStatus(appointmentId, visitStatus, prescription = '') {
  try {
    const res = await fetch(`${API_BASE}/appointments/status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ appointmentId, visitStatus, prescription }),
    });
    return await res.json();
  } catch (e) {
    return { success: false, error: e.message };
  }
}
