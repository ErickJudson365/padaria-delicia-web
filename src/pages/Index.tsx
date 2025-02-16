
import { useState } from 'react';
import { ShoppingCart, ChevronRight } from 'lucide-react';

const recipes = [
  {
    id: 1,
    title: "Pão Francês Tradicional",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
    ingredients: ["Farinha de trigo", "Fermento", "Sal", "Água"],
  },
  {
    id: 2,
    title: "Croissant de Chocolate",
    image: "https://images.unsplash.com/photo-1549903072-7e6e0bedb6cc?w=500&q=80",
    ingredients: ["Massa folhada", "Chocolate", "Manteiga", "Açúcar"],
  },
];

const products = [
  {
    id: 1,
    title: "Pão de Queijo",
    description: "Delicioso pão de queijo mineiro, quentinho e macio, feito com queijo curado especial.",
    price: "R$ 2,50",
    image: "https://images.unsplash.com/photo-1598233847491-f16487adee2f?w=500&q=80",
  },
  {
    id: 2,
    title: "Baguete",
    description: "Baguete francesa tradicional, crocante por fora e macia por dentro.",
    price: "R$ 5,00",
    image: "https://images.unsplash.com/photo-1612392062422-ef19b42f74df?w=500&q=80",
  },
  {
    id: 3,
    title: "Croissant",
    description: "Croissant folhado e amanteigado, perfeito para um café da manhã especial.",
    price: "R$ 4,50",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80",
  },
  {
    id: 4,
    title: "Bolo de Chocolate",
    description: "Bolo de chocolate fofinho com cobertura de ganache, receita especial da casa.",
    price: "R$ 8,00",
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
