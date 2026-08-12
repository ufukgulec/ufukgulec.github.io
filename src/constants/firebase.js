const API_KEY_CODES = [
    65, 73, 122, 97, 83, 121, 66, 77, 53, 45, 99, 81, 101, 109, 97, 49, 80, 122, 106, 112, 84, 80, 116,
    67, 120, 73, 100, 109, 118, 84, 114, 87, 72, 50, 112, 49, 110, 99, 56,
];

export const firebaseConfig = {
    apiKey: String.fromCharCode(...API_KEY_CODES),
    authDomain: "ufukgulec-portfolio.firebaseapp.com",
    projectId: "ufukgulec-portfolio",
    storageBucket: "ufukgulec-portfolio.firebasestorage.app",
    messagingSenderId: "996992279996",
    appId: "1:996992279996:web:f296555eef216d501337b9",
    measurementId: "G-8PVX0MLGSK",
};