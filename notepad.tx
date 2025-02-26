"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FormEvent, useState } from "react"
import { DotPattern } from "@/components/magicui/dot-pattern"

const products = [
  {
    id: 1,
    title: "High-Yield Savings Account",
    description: "Earn more with our competitive interest rates.",
    tags: ["Savings", "High Interest"],
  },
  {
    id: 2,
    title: "Stock Trading Platform",
    description: "Trade stocks with low fees and advanced tools.",
    tags: ["Investing", "Stocks"],
  },
  {
    id: 3,
    title: "Retirement Planning Service",
    description: "Secure your future with our expert retirement planning.",
    tags: ["Retirement", "Planning"],
  },
]

export default function Page() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <>
      <DotPattern glow={true} width={20} height={20} />
      <div className="relative p-8 max-w-6xl mx-auto flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-y-8">
          <h2 className="text-6xl font-semibold">
            Financial <span className="text-primary">Markets</span>
          </h2>
          <form onSubmit={handleSearch} className="flex gap-x-4 w-full max-w-md">
            <Input
              placeholder="Enter your product name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit">Search</Button>
          </form>
          {/* Product List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="block"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
