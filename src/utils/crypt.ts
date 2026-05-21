// Archivo que contiene funciones de cifrado y descifrado
import CryptoJS from 'crypto-js';

export function encryptsha256(data: string): string {
  return CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
}
