import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à l'accueil
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-amber-400 mb-4">Contact</h1>
            <p className="text-gray-300 mb-8">
              Nous sommes à votre disposition pour répondre à toutes vos questions et demandes.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Adresse</h3>
                  <p className="text-gray-400">15 Avenue des Champs-Élysées, 75008 Paris, France</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Téléphone</h3>
                  <p className="text-gray-400">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-400">contact@elegance-culinaire.fr</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif text-amber-400">Horaires d'ouverture</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="font-medium">Lundi - Vendredi</p>
                  <p className="text-gray-400">7h - 23h</p>
                </div>
                <div>
                  <p className="font-medium">Samedi</p>
                  <p className="text-gray-400">8h - 00h</p>
                </div>
                <div>
                  <p className="font-medium">Dimanche</p>
                  <p className="text-gray-400">8h - 22h</p>
                </div>
              </div>
            </div>

            <div className="mt-8 relative h-64 md:h-80 overflow-hidden rounded-sm">
              <Image src="/images/map.jpg" alt="Carte de localisation du restaurant" fill className="object-cover" />
            </div>
          </div>

          <div>
            <div className="bg-[#151515] p-8 rounded-sm">
              <h2 className="text-2xl font-serif text-amber-400 mb-6">Envoyez-nous un message</h2>

              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" placeholder="Votre nom" className="bg-[#0f0f0f] border-gray-800" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    className="bg-[#0f0f0f] border-gray-800"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input id="subject" placeholder="Sujet de votre message" className="bg-[#0f0f0f] border-gray-800" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Votre message..."
                    className="min-h-32 bg-[#0f0f0f] border-gray-800"
                  />
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 rounded-none text-lg">
                  Envoyer le message
                </Button>
              </form>
            </div>

            <div className="mt-8 bg-[#151515] p-8 rounded-sm">
              <h3 className="text-xl font-serif text-amber-400 mb-4">Événements privés</h3>
              <p className="text-gray-300 mb-4">
                Nous proposons également la privatisation complète ou partielle du restaurant pour vos événements
                spéciaux.
              </p>
              <p className="text-gray-300 mb-6">
                Mariages, anniversaires, séminaires d'entreprise... Contactez-nous pour discuter de votre projet.
              </p>
              <Button
                variant="outline"
                className="w-full border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white py-6 rounded-none"
              >
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
