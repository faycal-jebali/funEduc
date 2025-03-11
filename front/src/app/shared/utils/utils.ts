export class UTILS {
  /**
   * Recherche un objet par son ID dans une liste hiérarchique (avec enfants)
   * @param list Liste des objets (ex: subjectsList)
   * @param id ID recherché
   * @returns L'objet correspondant ou null si non trouvé
   */
  static findById<T extends { id: number; children?: T[] }>(
    list: T[],
    id: number
  ): T | null {
    for (const item of list) {
      if (item.id === id) {
        return item;
      }
      // Recherche récursive dans les enfants (si présents)
      if (item.children) {
        const found = this.findById(item.children, id);
        if (found) return found;
      }
    }
    return null;
  }

  /**
   * Vérifie si une valeur est vide (null, undefined, string vide, tableau vide, objet vide)
   */
  static isEmpty(value: any): boolean {
    if (value == null) return true; // null ou undefined
    if (typeof value === 'string' && value.trim() === '') return true; // Chaîne vide
    if (Array.isArray(value) && value.length === 0) return true; // Tableau vide
    if (typeof value === 'object' && Object.keys(value).length === 0)
      return true; // Objet vide
    return false;
  }

  /**
   * Génère un identifiant unique (UUID v4)
   */
  static generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  /**
   * Convertit une chaîne en format "Titre" (première lettre en majuscule)
   */
  static capitalize(text: string): string {
    return text
      ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
      : '';
  }

  /**
   * Formate une date en `JJ/MM/AAAA`
   */
  static formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR');
  }

  /**
   * Trie un tableau d'objets par une propriété donnée
   */
  static sortBy<T>(array: T[], key: keyof T, ascending: boolean = true): T[] {
    return array.sort((a, b) => {
      if (a[key] < b[key]) return ascending ? -1 : 1;
      if (a[key] > b[key]) return ascending ? 1 : -1;
      return 0;
    });
  }
}
