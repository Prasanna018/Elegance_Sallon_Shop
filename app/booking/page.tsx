"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [service, setService] = useState("")

  return (
    <div className="min-h-screen pt-20 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-center mb-10">Book an Appointment</h1>
        
        <div className="max-w-3xl mx-auto">
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Label htmlFor="service">Select Service</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="haircut">Haircut & Styling ($30+)</SelectItem>
                    <SelectItem value="color">Color & Highlights ($75+)</SelectItem>
                    <SelectItem value="facial">Facial Treatments ($50+)</SelectItem>
                  </SelectContent>
                </Select>

                <div className="mt-6">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" className="mt-1" />
                </div>

                <div className="mt-4">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
                </div>

                <div className="mt-4">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" className="mt-1" />
                </div>
              </div>

              <div>
                <Label>Select Date</Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border mt-1"
                />
              </div>
            </div>

            <Button className="w-full mt-8">
              Confirm Booking
            </Button>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}