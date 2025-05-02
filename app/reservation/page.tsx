"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

export default function ReservationPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à l'accueil
        </Link>

        <div className="max-w-3xl mx-auto">
          {!submitted ? (
            <>
              <h1 className="text-4xl md:text-5xl font-serif text-amber-400 mb-4">Réservation</h1>
              <p className="text-gray-300 mb-8">
                Réservez votre table à L'Élégance Culinaire pour une expérience gastronomique inoubliable.
              </p>

              <form onSubmit={handleSubmit} className="grid gap-6 bg-[#151515] p-8 rounded-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input id="name" placeholder="Votre nom" required className="bg-[#0f0f0f] border-gray-800" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      className="bg-[#0f0f0f] border-gray-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      placeholder="+33 6 12 34 56 78"
                      required
                      className="bg-[#0f0f0f] border-gray-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Nombre de personnes</Label>
                    <Select required>
                      <SelectTrigger id="guests" className="bg-[#0f0f0f] border-gray-800">
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 personne</SelectItem>
                        <SelectItem value="2">2 personnes</SelectItem>
                        <SelectItem value="3">3 personnes</SelectItem>
                        <SelectItem value="4">4 personnes</SelectItem>
                        <SelectItem value="5">5 personnes</SelectItem>
                        <SelectItem value="6">6 personnes</SelectItem>
                        <SelectItem value="7+">7 personnes ou plus</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal bg-[#0f0f0f] border-gray-800"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP", { locale: fr }) : <span>Sélectionnez une date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Heure</Label>
                    <Select required>
                      <SelectTrigger id="time" className="bg-[#0f0f0f] border-gray-800">
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12:00">12:00</SelectItem>
                        <SelectItem value="12:30">12:30</SelectItem>
                        <SelectItem value="13:00">13:00</SelectItem>
                        <SelectItem value="13:30">13:30</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="19:00">19:00</SelectItem>
                        <SelectItem value="19:30">19:30</SelectItem>
                        <SelectItem value="20:00">20:00</SelectItem>
                        <SelectItem value="20:30">20:30</SelectItem>
                        <SelectItem value="21:00">21:00</SelectItem>
                        <SelectItem value="21:30">21:30</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="special-requests">Demandes spéciales</Label>
                  <Textarea
                    id="special-requests"
                    placeholder="Allergies, occasions spéciales, préférences de placement..."
                    className="bg-[#0f0f0f] border-gray-800"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 rounded-none text-lg"
                  >
                    Confirmer la réservation
                  </Button>
                </div>

                <p className="text-gray-400 text-sm text-center">
                  En confirmant votre réservation, vous acceptez nos conditions générales et notre politique
                  d'annulation.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-12 bg-[#151515] rounded-sm">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                  className="lucide lucide-check"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h2 className="text-3xl font-serif text-amber-400 mb-4">Réservation Confirmée</h2>
              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                Merci pour votre réservation. Nous avons bien reçu votre demande et vous enverrons une confirmation par
                email sous peu.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-none text-lg">
                <Link href="/">Retour à l'accueil</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
