"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type FormEvent, useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

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

export default function SearchPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(query)
  const [isLoading, setIsLoading] = useState(true)
  const [filteredProducts, setFilteredProducts] = useState<typeof products>([])

  useEffect(() => {
    const filterProducts = () => {
      const filtered = products.filter((product) => {
        const searchLower = query.toLowerCase()
        return (
          product.title.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchLower))
        )
      })
      setFilteredProducts(filtered)
    }

    filterProducts()
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [query])

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsLoading(true)
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-x-4 max-w-2xl">
            <Input
              placeholder="Enter your product name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">Search</Button>
          </form>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Search Results for &quot;{query}&quot;</h2>
          {!isLoading && <p className="text-muted-foreground mt-1">Found {filteredProducts.length} results</p>}
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Skeleton className="h-6 w-2/3 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="block">
                <Card className="hover:shadow-lg transition-shadow">
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
        )}

        {!isLoading && filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}

