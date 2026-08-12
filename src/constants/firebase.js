// Firebase web config is inherently public (it ships to every browser that loads the app) — Google's
// own docs say not to treat it as a secret. Real protection comes from Firestore security rules plus
// restricting this API key's "HTTP referrers" to vinaysomawat.github.io in Google Cloud Console →
// APIs & Services → Credentials. The char-code encoding below only avoids a plain-text key in the
// source/GitHub code search; it doesn't add real secrecy on its own.
const API_KEY_CODES = [
  65, 73, 122, 97, 83, 121, 66, 77, 53, 45, 99, 81, 101, 109, 97, 49, 80, 122, 106, 112, 84, 80, 116,
  67, 120, 73, 100, 109, 118, 84, 114, 87, 72, 50, 112, 49, 110, 99, 56,
];

export const firebaseConfig = {
  apiKey: String.fromCharCode(...API_KEY_CODES),
  authDomain: "vinaysomawat-portfolio.firebaseapp.com",
  projectId: "vinaysomawat-portfolio",
  storageBucket: "vinaysomawat-portfolio.firebasestorage.app",
  messagingSenderId: "996992279996",
  appId: "1:996992279996:web:f296555eef216d501337b9",
  measurementId: "G-8PVX0MLGSK",
};
