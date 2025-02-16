
import { useState } from 'react';
import { ShoppingCart, ChevronRight } from 'lucide-react';

const recipes = [
  {
    id: 1,
    title: "Pão Francês Tradicional",
    image: "data:image/jpeg;base64,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",
    ingredients: ["Farinha de trigo", "Fermento", "Sal", "Água"],
  },
  {
    id: 2,
    title: "Croissant de Chocolate",
    image: "https://cdn.pixabay.com/photo/2016/11/06/23/14/croissant-1804435_1280.jpg",
    ingredients: ["Massa folhada", "Chocolate", "Manteiga", "Açúcar"],
  },
];

const products = [
  {
    id: 1,
    title: "Pão de Queijo",
    description: "Delicioso pão de queijo mineiro, quentinho e macio, feito com queijo curado especial.",
    price: "R$ 2,50",
    image: "https://cdn.pixabay.com/photo/2020/03/25/19/57/bread-4968502_1280.jpg",
  },
  {
    id: 2,
    title: "Baguete",
    description: "Baguete francesa tradicional, crocante por fora e macia por dentro.",
    price: "R$ 6,00",
    image: "https://cdn.pixabay.com/photo/2024/10/11/18/24/baguette-9113641_640.jpg",
  },
  {
    id: 3,
    title: "Croissant",
    description: "Croissant folhado e amanteigado, perfeito para um café da manhã especial.",
    price: "R$ 5,50",
    image: "https://cdn.pixabay.com/photo/2016/03/27/21/59/bread-1284438_640.jpg",
  },
  {
    id: 4,
    title: "Bolo de Chocolate",
    description: "Bolo de chocolate fofinho com cobertura de ganache, receita especial da casa.",
    price: "R$ 21,00",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&q=80",
  },
];

const Index = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF5E6]">
      {/* Header */}
      <header className="bg-primary p-6 text-white text-center animate-fade-in">
        <h1 className="font-brush text-5xl font-bold mb-4 italic underline decoration-2">Padaria Delicia</h1>
        <nav className="flex justify-center space-x-8">
          <button 
            onClick={() => setActivePage('home')}
            className={`transition-colors hover:text-accent ${activePage === 'home' ? 'text-accent' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => setActivePage('contacts')}
            className={`transition-colors hover:text-accent ${activePage === 'contacts' ? 'text-accent' : ''}`}
          >
            Contatos
          </button>
          <button 
            onClick={() => setActivePage('menu')}
            className={`transition-colors hover:text-accent ${activePage === 'menu' ? 'text-accent' : ''}`}
          >
            Cardápio
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 p-6 gap-6">
        {/* Sidebar */}
        <aside className="w-80 bg-white p-4 rounded-lg shadow-lg animate-slide-in">
          <h2 className="font-playfair text-2xl font-semibold mb-4">Nossas Receitas</h2>
          <div className="space-y-6">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="bg-[#FDF5E6] p-4 rounded-lg">
                <div className="flex items-start space-x-4">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-playfair font-semibold text-lg">{recipe.title}</h3>
                    <ul className="text-sm mt-2 space-y-1">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>• {ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button className="mt-3 w-full bg-secondary text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  Ver mais
                  <ChevronRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Product Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-playfair font-semibold text-xl mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <p className="text-lg font-semibold text-primary mb-4">{product.price}</p>
                <button className="w-full bg-primary text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                  <ShoppingCart className="mr-2 w-5 h-5" />
                  Comprar
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white p-4 text-center">
        <p>&copy; 2024 Padaria Delicia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;
