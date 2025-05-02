import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MenusPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à l'accueil
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif text-amber-400 mb-8">Nos Menus</h1>

        <Tabs defaultValue="petit-dejeuner" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-[#151515]">
            <TabsTrigger id="petit-dejeuner"  value="petit-dejeuner">Petit Déjeuner</TabsTrigger>
            <TabsTrigger id="dejeuner" value="dejeuner">Déjeuner</TabsTrigger>
            <TabsTrigger id="diner" value="diner">Dîner</TabsTrigger>
          </TabsList>

          <TabsContent value="petit-dejeuner" className="mt-8">
            <div className="bg-[#151515] p-8 rounded-sm">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-serif text-amber-400 mb-2">Menu Petit Déjeuner</h2>
                <p className="text-gray-400">Servi de 7h à 11h</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-serif text-amber-400 mb-6 pb-2 border-b border-gray-800">
                    Les Classiques
                  </h3>

                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Viennoiseries Artisanales</h4>
                        <span className="text-amber-400">12€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Assortiment de croissants, pains au chocolat et brioches</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Œufs Bénédicte Truffés</h4>
                        <span className="text-amber-400">18€</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Œufs pochés, muffin anglais, sauce hollandaise à la truffe
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Granola Maison</h4>
                        <span className="text-amber-400">14€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Yaourt grec, fruits frais de saison, miel d'acacia</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Avocado Toast</h4>
                        <span className="text-amber-400">16€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Pain au levain, avocat, œuf poché, graines de sésame</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-amber-400 mb-6 pb-2 border-b border-gray-800">Boissons</h3>

                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Café de Spécialité</h4>
                        <span className="text-amber-400">5€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Expresso, Americano, Cappuccino ou Latte</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Thés Dammann Frères</h4>
                        <span className="text-amber-400">6€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Sélection de thés et infusions premium</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Jus Pressés</h4>
                        <span className="text-amber-400">8€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Orange, pamplemousse, pomme ou carotte-gingembre</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Champagne</h4>
                        <span className="text-amber-400">18€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Coupe de champagne Brut</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-serif text-amber-400 mb-6">Formules</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#0f0f0f] p-6 border border-gray-800">
                    <h4 className="font-medium text-lg mb-2">Formule Classique</h4>
                    <p className="text-gray-400 text-sm mb-4">Boisson chaude, jus pressé, viennoiseries ou toast</p>
                    <p className="text-amber-400 font-medium">24€</p>
                  </div>

                  <div className="bg-[#0f0f0f] p-6 border border-gray-800">
                    <h4 className="font-medium text-lg mb-2">Formule Gourmande</h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Boisson chaude, jus pressé, œufs au choix, viennoiseries
                    </p>
                    <p className="text-amber-400 font-medium">32€</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dejeuner" className="mt-8">
            <div className="bg-[#151515] p-8 rounded-sm">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-serif text-amber-400 mb-2">Menu Déjeuner</h2>
                <p className="text-gray-400">Servi de 12h à 15h</p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                <div>
                  <h3 className="text-xl font-serif text-amber-400 mb-6 pb-2 border-b border-gray-800">Entrées</h3>

                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Carpaccio de Saint-Jacques</h4>
                        <span className="text-amber-400">22€</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Huile d'olive extra vierge, zestes d'agrumes, fleur de sel
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Velouté de Champignons</h4>
                        <span className="text-amber-400">18€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Crème de cèpes, huile de truffe, croûtons dorés</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Salade de Chèvre Chaud</h4>
                        <span className="text-amber-400">16€</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Mesclun, toast de chèvre, miel, noix, vinaigrette balsamique
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-amber-400 mb-6 pb-2 border-b border-gray-800">Plats</h3>

                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Risotto aux Cèpes</h4>
                        <span className="text-amber-400">28€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Riz carnaroli, cèpes frais, parmesan affiné 24 mois</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Filet de Bar</h4>
                        <span className="text-amber-400">32€</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Purée de céleri, émulsion au beurre blanc, herbes fraîches
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Suprême de Volaille</h4>
                        <span className="text-amber-400">26€</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Mousseline de pommes de terre, jus corsé, légumes de saison
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-amber-400 mb-6 pb-2 border-b border-gray-800">Desserts</h3>

                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Tarte au Citron Meringuée</h4>
                        <span className="text-amber-400">14€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Crème de citron, meringue italienne, sorbet citron</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Moelleux au Chocolat</h4>
                        <span className="text-amber-400">16€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Cœur coulant, glace vanille, tuile aux amandes</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Café Gourmand</h4>
                        <span className="text-amber-400">12€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Café et assortiment de mignardises</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-serif text-amber-400 mb-6">Formules</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#0f0f0f] p-6 border border-gray-800">
                    <h4 className="font-medium text-lg mb-2">Formule Express</h4>
                    <p className="text-gray-400 text-sm mb-4">Plat du jour + Café gourmand</p>
                    <p className="text-amber-400 font-medium">32€</p>
                  </div>

                  <div className="bg-[#0f0f0f] p-6 border border-gray-800">
                    <h4 className="font-medium text-lg mb-2">Menu Dégustation</h4>
                    <p className="text-gray-400 text-sm mb-4">Entrée + Plat + Dessert</p>
                    <p className="text-amber-400 font-medium">48€</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="diner" className="mt-8">
            <div className="bg-[#151515] p-8 rounded-sm">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-serif text-amber-400 mb-2">Menu Dîner</h2>
                <p className="text-gray-400">Servi de 19h à 23h</p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                <div>
                  <h3 className="text-xl font-serif text-amber-400 mb-6 pb-2 border-b border-gray-800">Entrées</h3>

                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Foie Gras de Canard</h4>
                        <span className="text-amber-400">26€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Chutney de figues, pain brioché toasté, fleur de sel</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Langoustines Rôties</h4>
                        <span className="text-amber-400">28€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Bisque crémeuse, fenouil confit, huile de crustacés</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Burrata des Pouilles</h4>
                        <span className="text-amber-400">22€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Tomates anciennes, pesto maison, pignons de pin torréfiés</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-amber-400 mb-6 pb-2 border-b border-gray-800">Plats</h3>

                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Filet de Bœuf Rossini</h4>
                        <span className="text-amber-400">42€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Foie gras poêlé, sauce périgueux, pommes fondantes</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Homard Bleu</h4>
                        <span className="text-amber-400">48€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Risotto à l'encre de seiche, émulsion safranée</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Carré d'Agneau</h4>
                        <span className="text-amber-400">38€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Croûte d'herbes, jus d'agneau, légumes printaniers</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-amber-400 mb-6 pb-2 border-b border-gray-800">Desserts</h3>

                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Soufflé au Grand Marnier</h4>
                        <span className="text-amber-400">18€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Crème anglaise à la vanille de Madagascar</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Sphère au Chocolat</h4>
                        <span className="text-amber-400">16€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Cœur coulant caramel, sauce chocolat chaud</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-medium">Assiette de Fromages Affinés</h4>
                        <span className="text-amber-400">14€</span>
                      </div>
                      <p className="text-gray-400 text-sm">Sélection de fromages, confiture de cerises noires</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-serif text-amber-400 mb-6">Menus Dégustation</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#0f0f0f] p-6 border border-gray-800">
                    <h4 className="font-medium text-lg mb-2">Menu Découverte</h4>
                    <p className="text-gray-400 text-sm mb-4">Entrée + Plat + Dessert</p>
                    <p className="text-amber-400 font-medium">68€</p>
                    <p className="text-gray-400 text-sm mt-2">Accord mets et vins +32€</p>
                  </div>

                  <div className="bg-[#0f0f0f] p-6 border border-gray-800">
                    <h4 className="font-medium text-lg mb-2">Menu Prestige</h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Amuse-bouche + 2 Entrées + Plat + Pré-dessert + Dessert
                    </p>
                    <p className="text-amber-400 font-medium">98€</p>
                    <p className="text-gray-400 text-sm mt-2">Accord mets et vins +48€</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Pour toute demande spécifique ou allergie alimentaire, n'hésitez pas à nous contacter.
          </p>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-none text-lg">
            <Link href="/reservation">Réserver une table</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
