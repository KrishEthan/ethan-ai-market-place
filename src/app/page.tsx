import { Input } from "@/components/input";
import { AuroraText } from "@/components/magicui/aurora-text";
import { DotPattern } from "@/components/magicui/dot-pattern";
import Navbar from "@/components/navbar";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";
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
];
export default function Page() {
  return (
    <div className="h-screen w-screen">
      <DotPattern width={20} height={20} />
      <div className="max-w-4xl mx-auto h-full">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-full gap-16">
          <h1 className="text-5xl font-bold tracking-wide leading-tight text-center">
            Everything your <br /> <AuroraText>Relationship Manager</AuroraText>{" "}
            needs
          </h1>
          <Input />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
            {products.map((product) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="block"
              >
                <Card className="h-full bg-white hover:shadow-lg transition-shadow">
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
    </div>
  );
}
