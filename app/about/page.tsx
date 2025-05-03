import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Ajoutons un peu d'espace en haut pour compenser la navigation fixe */}
      {/* Modifions la première div de contenu : */}
      <div className="container mx-auto px-4 py-12 pt-8">
        <Link href="/" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à l'accueil
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif text-amber-400 mb-8">Notre Histoire</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Fondé en 2010 par le chef étoilé Jean-Pierre Moreau, L'Élégance Culinaire est né d'une passion pour la
              gastronomie française et d'un désir de créer une expérience culinaire exceptionnelle au cœur de Paris.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Après avoir travaillé dans plusieurs restaurants prestigieux à travers le monde, Jean-Pierre a voulu créer
              un établissement qui allie tradition française et innovation culinaire, dans un cadre élégant mais
              chaleureux.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Aujourd'hui, L'Élégance Culinaire est reconnu comme l'un des meilleurs restaurants de la capitale,
              récompensé par deux étoiles au Guide Michelin et célébré pour son service impeccable et son ambiance
              raffinée.
            </p>
          </div>
          <div className="relative h-80 md:h-96 overflow-hidden rounded-sm">
            <Image src="/images/chef.jpg" alt="Chef Jean-Pierre Moreau" fill className="object-cover" />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif text-amber-400 mb-8 text-center">Notre Philosophie</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#151515] p-8 rounded-sm">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-leaf"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4">Produits Locaux</h3>
              <p className="text-gray-300">
                Nous sélectionnons avec soin les meilleurs produits locaux et de saison, en travaillant directement avec
                des producteurs passionnés qui partagent notre engagement pour la qualité.
              </p>
            </div>

            <div className="bg-[#151515] p-8 rounded-sm">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  <path d="M5 3v4"></path>
                  <path d="M19 17v4"></path>
                  <path d="M3 5h4"></path>
                  <path d="M17 19h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4">Créativité</h3>
              <p className="text-gray-300">
                Notre équipe de chefs talentueux repousse constamment les limites de la gastronomie, en créant des plats
                innovants qui surprennent et ravissent les papilles de nos clients.
              </p>
            </div>

            <div className="bg-[#151515] p-8 rounded-sm">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart-handshake"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
                  <path d="m18 15-2-2"></path>
                  <path d="m15 18-2-2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4">Hospitalité</h3>
              <p className="text-gray-300">
                Nous croyons que l'expérience gastronomique va au-delà de l'assiette. Notre équipe de service
                attentionnée s'efforce de créer une atmosphère chaleureuse et accueillante pour tous nos clients.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif text-amber-400 mb-8 text-center">Notre Équipe</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 overflow-hidden rounded-sm mb-4">
                <Image src="/images/chef-1.jpg" alt="Chef Jean-Pierre Moreau" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-serif mb-1">Jean-Pierre Moreau</h3>
              <p className="text-amber-400 mb-2">Chef Fondateur</p>
              <p className="text-gray-300 text-sm">
                Avec plus de 25 ans d'expérience dans la gastronomie française, Jean-Pierre apporte sa vision unique et
                sa passion à chaque plat.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 overflow-hidden rounded-sm mb-4">
                <Image src="/images/chef-2.jpg" alt="Sophie Dubois" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-serif mb-1">Sophie Dubois</h3>
              <p className="text-amber-400 mb-2">Chef Pâtissière</p>
              <p className="text-gray-300 text-sm">
                Reconnue pour sa créativité et sa précision, Sophie crée des desserts qui sont de véritables œuvres
                d'art.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 overflow-hidden rounded-sm mb-4">
                <Image src="/images/sommelier.jpg" alt="Marc Laurent" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-serif mb-1">Marc Laurent</h3>
              <p className="text-amber-400 mb-2">Sommelier</p>
              <p className="text-gray-300 text-sm">
                Expert en vins, Marc sélectionne avec soin les meilleurs crus pour accompagner parfaitement chaque plat.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#151515] p-8 md:p-12 rounded-sm text-center">
          <h2 className="text-3xl font-serif text-amber-400 mb-6">Rejoignez Notre Équipe</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Nous sommes toujours à la recherche de talents passionnés pour rejoindre notre équipe. Si vous partagez
            notre amour pour la gastronomie et l'excellence du service, nous serions ravis de vous rencontrer.
          </p>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-none text-lg">
            Voir nos offres d'emploi
          </Button>
        </div>
      </div>
    </main>
  )
}
