import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Phone, Star, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-restaurant.jpg"
            alt="Intérieur élégant du restaurant"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-4">
              <span className="text-amber-400">L'Élégance</span> Culinaire
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-200">
              Une expérience gastronomique exceptionnelle dans un cadre raffiné
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-none text-lg">
                Réserver une table
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-none text-lg"
              >
                Découvrir notre menu
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center bg-black/80 backdrop-blur-sm p-4 border-l-4 border-amber-600">
              <div className="flex items-center gap-2 mb-2 md:mb-0">
                <Clock className="h-5 w-5 text-amber-400" />
                <span>Ouvert aujourd'hui: 11h00 - 23h00</span>
              </div>
              <div className="flex items-center gap-2 mb-2 md:mb-0">
                <Phone className="h-5 w-5 text-amber-400" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span>15 Avenue des Champs-Élysées, Paris</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-amber-400">Notre Philosophie</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Bienvenue à L'Élégance Culinaire, où la gastronomie française rencontre l'innovation contemporaine.
                Notre chef étoilé crée des plats qui célèbrent les produits de saison et les saveurs authentiques.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Dans notre établissement haut de gamme, nous nous engageons à offrir une expérience culinaire
                inoubliable, où chaque détail est soigneusement pensé pour votre plaisir.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="fill-amber-400" size={16} />
                  <Star className="fill-amber-400" size={16} />
                  <Star className="fill-amber-400" size={16} />
                  <Star className="fill-amber-400" size={16} />
                  <Star className="fill-amber-400" size={16} />
                </div>
                <span className="text-gray-400">Plus de 500 avis exceptionnels</span>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/dish-1.jpg" alt="Plat signature" fill className="object-cover rounded-sm" />
              </div>
              <div className="relative h-64 overflow-hidden mt-8">
                <Image src="/images/dish-2.jpg" alt="Plat gastronomique" fill className="object-cover rounded-sm" />
              </div>
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/dish-3.jpg" alt="Dessert élégant" fill className="object-cover rounded-sm" />
              </div>
              <div className="relative h-64 overflow-hidden mt-8">
                <Image src="/images/dish-4.jpg" alt="Cocktail signature" fill className="object-cover rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 bg-[#151515]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-amber-400">Nos Menus</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Découvrez notre sélection de menus saisonniers, élaborés avec les meilleurs produits du terroir français.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0f0f0f] border border-gray-800 p-8 hover:border-amber-600 transition-colors">
              <div className="mb-4">
                <h3 className="text-xl font-serif text-amber-400 mb-2">Petit Déjeuner</h3>
                <p className="text-gray-400 text-sm">Servi de 7h à 11h</p>
              </div>
              <ul className="space-y-4 mb-6">
                <li>
                  <h4 className="font-medium">Viennoiseries Artisanales</h4>
                  <p className="text-gray-400 text-sm">Assortiment de croissants, pains au chocolat et brioches</p>
                </li>
                <li>
                  <h4 className="font-medium">Œufs Bénédicte Truffés</h4>
                  <p className="text-gray-400 text-sm">Œufs pochés, muffin anglais, sauce hollandaise à la truffe</p>
                </li>
                <li>
                  <h4 className="font-medium">Granola Maison</h4>
                  <p className="text-gray-400 text-sm">Yaourt grec, fruits frais de saison, miel d'acacia</p>
                </li>
              </ul>
              <Link
                href="/menus/petit-dejeuner"
                className="text-amber-400 flex items-center gap-2 text-sm hover:underline"
              >
                Voir le menu complet <span className="text-lg">→</span>
              </Link>
            </div>

            <div className="bg-[#0f0f0f] border border-gray-800 p-8 hover:border-amber-600 transition-colors">
              <div className="mb-4">
                <h3 className="text-xl font-serif text-amber-400 mb-2">Déjeuner</h3>
                <p className="text-gray-400 text-sm">Servi de 12h à 15h</p>
              </div>
              <ul className="space-y-4 mb-6">
                <li>
                  <h4 className="font-medium">Carpaccio de Saint-Jacques</h4>
                  <p className="text-gray-400 text-sm">Huile d'olive extra vierge, zestes d'agrumes, fleur de sel</p>
                </li>
                <li>
                  <h4 className="font-medium">Risotto aux Cèpes</h4>
                  <p className="text-gray-400 text-sm">Riz carnaroli, cèpes frais, parmesan affiné 24 mois</p>
                </li>
                <li>
                  <h4 className="font-medium">Filet de Bar</h4>
                  <p className="text-gray-400 text-sm">Purée de céleri, émulsion au beurre blanc, herbes fraîches</p>
                </li>
              </ul>
              <Link href="/menus/dejeuner" className="text-amber-400 flex items-center gap-2 text-sm hover:underline">
                Voir le menu complet <span className="text-lg">→</span>
              </Link>
            </div>

            <div className="bg-[#0f0f0f] border border-gray-800 p-8 hover:border-amber-600 transition-colors">
              <div className="mb-4">
                <h3 className="text-xl font-serif text-amber-400 mb-2">Dîner</h3>
                <p className="text-gray-400 text-sm">Servi de 19h à 23h</p>
              </div>
              <ul className="space-y-4 mb-6">
                <li>
                  <h4 className="font-medium">Foie Gras de Canard</h4>
                  <p className="text-gray-400 text-sm">Chutney de figues, pain brioché toasté, fleur de sel</p>
                </li>
                <li>
                  <h4 className="font-medium">Filet de Bœuf Rossini</h4>
                  <p className="text-gray-400 text-sm">Foie gras poêlé, sauce périgueux, pommes fondantes</p>
                </li>
                <li>
                  <h4 className="font-medium">Soufflé au Grand Marnier</h4>
                  <p className="text-gray-400 text-sm">Crème anglaise à la vanille de Madagascar</p>
                </li>
              </ul>
              <Link href="/menus/diner" className="text-amber-400 flex items-center gap-2 text-sm hover:underline">
                Voir le menu complet <span className="text-lg">→</span>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-none text-lg">
              Réserver une table
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-amber-400">Nos Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Nous nous efforçons de rendre votre expérience aussi agréable que possible avec nos services premium.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif mb-3">Repas sur Place</h3>
              <p className="text-gray-400">
                Profitez d'une expérience gastronomique complète dans notre salle élégante avec un service attentionné.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif mb-3">Réservations</h3>
              <p className="text-gray-400">
                Réservez facilement votre table en ligne ou par téléphone pour garantir votre place.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-wine"
                >
                  <path d="M8 22h8"></path>
                  <path d="M7 10h10"></path>
                  <path d="M12 4v18"></path>
                  <path d="M12 4c0-1 .5-2 2.5-2 1 0 1.5.5 1.5 1 0 1.5-2 1-2 3"></path>
                  <path d="M12 4c0-1-.5-2-2.5-2-1 0-1.5.5-1.5 1 0 1.5 2 1 2 3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-3">Carte des Vins</h3>
              <p className="text-gray-400">
                Une sélection exceptionnelle de vins français et internationaux pour accompagner votre repas.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-martini"
                >
                  <path d="M8 22h8"></path>
                  <path d="M12 11v11"></path>
                  <path d="m19 3-7 8-7-8Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-3">Cocktails Signature</h3>
              <p className="text-gray-400">
                Découvrez nos cocktails créés par notre mixologue talentueux, utilisant des ingrédients premium.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-baby"
                >
                  <path d="M9 12h.01"></path>
                  <path d="M15 12h.01"></path>
                  <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path>
                  <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-3">Menu Enfant</h3>
              <p className="text-gray-400">
                Des options adaptées pour les jeunes gourmets, préparées avec le même soin que nos plats pour adultes.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-wheelchair"
                >
                  <circle cx="14" cy="8" r="2"></circle>
                  <path d="M12 10v2a2 2 0 0 0 2 2h3"></path>
                  <path d="M4.56 22h-.12C2.5 22 2 19.5 2 19.5c0-1.5.5-2 2-2s1.5 2 1.5 2"></path>
                  <path d="M9.05 22H6.5c-1.5 0-2-1.5-2-2V8"></path>
                  <path d="M12 5.5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3.5"></path>
                  <path d="M16 18h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3.5"></path>
                  <path d="M5.5 14h3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-3">Accessibilité</h3>
              <p className="text-gray-400">
                Notre établissement est entièrement accessible aux personnes à mobilité réduite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#151515]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-amber-400">Ce Que Disent Nos Clients</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Découvrez les expériences de nos clients qui ont partagé leur avis sur notre établissement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0f0f0f] p-8 border border-gray-800">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                <Star className="fill-amber-400" size={16} />
                <Star className="fill-amber-400" size={16} />
                <Star className="fill-amber-400" size={16} />
                <Star className="fill-amber-400" size={16} />
                <Star className="fill-amber-400" size={16} />
              </div>
              <p className="text-gray-300 italic mb-6">
                "Une expérience culinaire exceptionnelle. Chaque plat était une œuvre d'art, tant visuellement que
                gustativement. Le service était impeccable et l'ambiance parfaite pour notre anniversaire de mariage."
              </p>
              <div>
                <p className="font-medium">Sophie et Pierre</p>
                <p className="text-gray-400 text-sm">Clients réguliers</p>
              </div>
            </div>

            <div className="bg-[#0f0f0f] p-8 border border-gray-800">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                <Star className="fill-amber-400" size={16} />
                <Star className="fill-amber-400" size={16} />
                <Star className="fill-amber-400" size={16} />
                <Star className="fill-amber-400" size={16} />
                <Star className="fill-amber-400" size={16} />
              </div>
              <p className="text-gray-300 italic mb-6">
                "Les cocktails sont parmi les meilleurs que j'ai jamais goûtés. Le mixologue est un véritable artiste !
                L'ambiance élégante mais décontractée en fait l'endroit idéal pour un dîner d'affaires ou une soirée
                romantique."
              </p>
              <div>
                <p className="font-medium">Jean-Marc</p>
                <p className="text-gray-400 text-sm">Critique gastronomique</p>
              </div>
            </div>

            <div className="bg-[#0f0f0f] p-8 border border-gray-800">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                <Star className="fill-amber-400" size={16} />
                <Star className="fill-amber-400" size={16} />
                <Star className="fill-amber-400" size={16} />
                <Star className="fill-amber-400" size={16} />
                <Star className="fill-amber-400" size={16} />
              </div>
              <p className="text-gray-300 italic mb-6">
                "Nous avons célébré l'anniversaire de notre fille ici et toute la famille a été enchantée. Le menu
                enfant était sophistiqué tout en restant accessible, et l'équipe a fait un effort particulier pour
                rendre cette soirée mémorable."
              </p>
              <div>
                <p className="font-medium">Famille Dubois</p>
                <p className="text-gray-400 text-sm">Visiteurs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-[#0f0f0f] relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/restaurant-interior.jpg"
            alt="Intérieur du restaurant"
            fill
            className="object-cover brightness-25"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-amber-400">Réservez Votre Table</h2>
            <p className="text-gray-200 mb-8">
              Pour une expérience gastronomique inoubliable, réservez votre table dès maintenant. Notre équipe se fera
              un plaisir de vous accueillir et de vous offrir un moment d'exception.
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-none text-lg">
              Réserver maintenant
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif text-amber-400 mb-4">L'Élégance Culinaire</h3>
              <p className="text-gray-400 mb-4">
                Une expérience gastronomique exceptionnelle dans un cadre raffiné au cœur de Paris.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Horaires d'ouverture</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lundi - Vendredi: 7h - 23h</li>
                <li>Samedi: 8h - 00h</li>
                <li>Dimanche: 8h - 22h</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-400" />
                  15 Avenue des Champs-Élysées, Paris
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-400" />
                  +33 1 23 45 67 89
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail text-amber-400"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  contact@elegance-culinaire.fr
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Informations</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Réservations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Nos menus
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Événements privés
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Carrières
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} L'Élégance Culinaire. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
