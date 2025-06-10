/**
 * Generate a random character string
 * @param length Number of characters
 * @param date include date
 */
function randomString(length: number, date?: boolean): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let random = ''
  for (let i = 0; i < length; i++) {
    random += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return date ? `${random}.${Date.now()}` : random
}

export const random = {
  /**
   * Generate a random string.
   */
  string: (length: number, date?: boolean): string => {
    return randomString(length, date)
  },

  /**
   * Generate a random email address.
   */
  email: (): string => {
    return `${randomString(6)}.test@sisho.com`.toLowerCase()
  },
  /**
   * Generate a random file name
   * @param extension file extension
   */
  filename: (extension: string): string => {
    return `${randomString(25, true)}.${extension}`
  }
}
