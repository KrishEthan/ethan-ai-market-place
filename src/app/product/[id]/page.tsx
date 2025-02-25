"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// Sample product data
const products = [
  {
    id: 1,
    title: "High-Yield Savings Account",
    description: "Earn more with our competitive interest rates.",
    accountInfo: {
      name: "ACME Capital Management, LLC",
      accountAlias: "Master Acct-FXXXXXX",
      account: "FXXXXXX",
      accountType: "Advisor Master",
      customerType: "Limited Liability Company",
      accountCapabilities: "Cash",
      tradingPermissions: "Forex",
      baseCurrency: "USD",
    },
    marginSummary: {
      equityWithLoanValue: 2154.38,
      cashValue: 2154.38,
      spanOptionValue: 0.0,
      netLiquidationValue: 2154.38,
      stockAndBondValue: 0.0,
      mutualFundValue: 0.0,
      nonSpanOptionValue: 0.0,
      interestValue: 0.0,
      dividendValue: 0.0,
      initialMargin: 0.0,
      availableFunds: 2154.38,
      maintenanceMargin: 0.0,
      excessLiquidity: 2154.38,
    },
  },

  {
    id: 2,
    title: "Stocks & ETFs",
    description: "Invest in individual stocks or ETFs.",
    accountInfo: {
      name: "ACME Capital Management, LLC",
      accountAlias: "Master Acct-FXXXXXX",
      account: "FXXXXXX",
      accountType: "Advisor Master",
      customerType: "Limited Liability Company",
      accountCapabilities: "Margin",
      tradingPermissions: "Stocks",
      baseCurrency: "USD",
    },
    marginSummary: {
      equityWithLoanValue: 2154.38,
      cashValue: 2154.38,
      spanOptionValue: 0.0,
      netLiquidationValue: 2154.38,
      stockAndBondValue: 0.0,
      mutualFundValue: 0.0,
      nonSpanOptionValue: 0.0,
      interestValue: 0.0,
      dividendValue: 0.0,
      initialMargin: 0.0,
      availableFunds: 2154.38,
      maintenanceMargin: 0.0,
      excessLiquidity: 2154.38,
    },
  },

  {
    id: 3,
    title: "Options",
    description: "Trade options on stocks, ETFs, and more.",
    accountInfo: {
      name: "ACME Capital Management, LLC",
      accountAlias: "Master Acct-FXXXXXX",
      account: "FXXXXXX",
      accountType: "Advisor Master",
      customerType: "Limited Liability Company",
      accountCapabilities: "Margin",
      tradingPermissions: "Options",
      baseCurrency: "USD",
    },
    marginSummary: {
      equityWithLoanValue: 2154.38,
      cashValue: 2154.38,
      spanOptionValue: 0.0,
      netLiquidationValue: 2154.38,
      stockAndBondValue: 0.0,
      mutualFundValue: 0.0,
      nonSpanOptionValue: 0.0,
      interestValue: 0.0,
      dividendValue: 0.0,
      initialMargin: 0.0,
      availableFunds: 2154.38,
      maintenanceMargin: 0.0,
      excessLiquidity: 2154.38,
    },
  },

  {
    id: 4,
    title: "Futures",
    description: "Trade futures contracts on commodities, indices, and more.",
    accountInfo: {
      name: "ACME Capital Management, LLC",
      accountAlias: "Master Acct-FXXXXXX",
      account: "FXXXXXX",
      accountType: "Advisor Master",
      customerType: "Limited Liability Company",
      accountCapabilities: "Margin",
      tradingPermissions: "Futures",
      baseCurrency: "USD",
    },
    marginSummary: {
      equityWithLoanValue: 2154.38,
      cashValue: 2154.38,
      spanOptionValue: 0.0,
      netLiquidationValue: 2154.38,
      stockAndBondValue: 0.0,
      mutualFundValue: 0.0,
      nonSpanOptionValue: 0.0,
      interestValue: 0.0,
      dividendValue: 0.0,
      initialMargin: 0.0,
      availableFunds: 2154.38,
      maintenanceMargin: 0.0,
      excessLiquidity: 2154.38,
    },
  },
];

const gainersData = [
  {
    client: "TT_SS",
    security:
      "Bond, (Default) Issuer: Perisai Capital Labuan Inc, Coupon: 6.875%, Maturity Date: 03-OCT-2016",
    percentageContribution: "16.29%",
    totalPL: "232.45 K",
  },
  {
    client: "PK_SC",
    security:
      "Exchange Traded Fund, Issuer: ESC ETF ISHARES MSCI RUSSIA BE ESC; Custodian: Bank of New York",
    percentageContribution: "9.17%",
    totalPL: "130.92 K",
  },
  {
    client: "PK_SC",
    security: "Norwegian Cruise Line Holdings Ltd",
    percentageContribution: "5.27%",
    totalPL: "75.31 K",
  },
  {
    client: "PR_SA",
    security: "SPDR S&P 500 ETF",
    percentageContribution: "5.21%",
    totalPL: "74.36 K",
  },
  {
    client: "PK_SC",
    security: "ISHARES HANG SENG TECH ETF",
    percentageContribution: "4.67%",
    totalPL: "66.75 K",
  },
];

const losersData = [
  {
    client: "LA_SC",
    security: "HMS Bergbau AG",
    percentageContribution: "22.54%",
    totalPL: "-8.50 M",
  },
  {
    client: "PK_SC",
    security: "SPDR S&P 500 ETF",
    percentageContribution: "19.65%",
    totalPL: "-7.41 M",
  },
  {
    client: "LA_SC",
    security: "HMS Bergbau AG",
    percentageContribution: "4.07%",
    totalPL: "-1.53 M",
  },
  {
    client: "AK_NK",
    security: "ARAVALI GLB ARB C SGD-ACC KYG0447H1065",
    percentageContribution: "3.50%",
    totalPL: "-1.32 M",
  },
  {
    client: "MK_GM",
    security: "ARAVALI GLB ARB C SGD-ACC KYG0447H1065",
    percentageContribution: "3.39%",
    totalPL: "-1.28 M",
  },
];

export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" passHref>
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
        </Card>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="account-info">
            <AccordionTrigger className="text-lg font-semibold">
              Account Information
            </AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableBody>
                  {Object.entries(product.accountInfo).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="margin-summary">
            <AccordionTrigger className="text-lg font-semibold">
              Margin Summary
            </AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount (USD)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(product.marginSummary).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </TableCell>
                      <TableCell className="text-right">
                        {typeof value === "number"
                          ? value.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          : value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="gainers">
            <AccordionTrigger className="text-lg font-semibold">
              <div className="flex justify-between w-full pr-6">
                <span>Gainers</span>
                <span className="text-primary text-sm">Total Gainers: 579.8 K</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Security</TableHead>
                    <TableHead className="text-right">
                      Percentage Contribution
                    </TableHead>
                    <TableHead className="text-right">Total PL</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gainersData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.client}</TableCell>
                      <TableCell>{item.security}</TableCell>
                      <TableCell className="text-right text-primary">
                        {item.percentageContribution}
                      </TableCell>
                      <TableCell className="text-right font-medium text-primary">
                        {item.totalPL}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="losers">
            <AccordionTrigger className="text-lg font-semibold">
              <div className="flex justify-between w-full pr-6">
                <span>Losers</span>
                <span className="text-destructive text-sm">Total Losers: -20.05 M</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Security</TableHead>
                    <TableHead className="text-right">
                      Percentage Contribution
                    </TableHead>
                    <TableHead className="text-right">Total PL</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {losersData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.client}</TableCell>
                      <TableCell>{item.security}</TableCell>
                      <TableCell className="text-right text-destructive">
                        {item.percentageContribution}
                      </TableCell>
                      <TableCell className="text-right font-medium text-destructive">
                        {item.totalPL}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="legal-notes">
            <AccordionTrigger className="text-lg font-semibold">
              Legal Notes
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-sm text-muted-foreground">
                <p>Generated: {new Date().toLocaleString()}</p>
                <p className="mt-2">
                  This is a system-generated report. All values are shown in the
                  account&apos;s base currency unless otherwise noted.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
