export interface latestproduct {
  idProduit: number;
  nomProduit: string;
  descriptionProduit: string;
  prixProduit: number;
  imageProduit: string;
  promotion: boolean;
  categorie: {
    idCategorie: number;
    nomCategorie: string;
  };
}
