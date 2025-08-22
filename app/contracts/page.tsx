import type { Metadata } from 'next'
import { CheckCircle, FileText, AlertTriangle, Clock, Shield, Users, Building, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Understanding Contracts - Energy Contract Terms & Conditions',
  description: 'Know the lingo when it comes to kilowatt-per-hour rates and minimum contract term lengths. Learn about contract summaries, cancellation fees, and renewal notices.',
  keywords: 'energy contracts, contract terms, cancellation fees, contract renewal, electric supplier contracts, energy agreement',
  openGraph: {
    title: 'Understanding Contracts - Energy Contract Terms & Conditions',
    description: 'Know the lingo when it comes to kilowatt-per-hour rates and minimum contract term lengths.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understanding Contracts - Energy Contract Terms & Conditions',
    description: 'Know the lingo when it comes to kilowatt-per-hour rates and minimum contract term lengths.',
  },
}

export default function ContractsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white mt-0">
              Understanding Contracts
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Know the lingo when it comes to kilowatt-per-hour rates and minimum contract term lengths.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-blue-200">
              <span>Home</span>
              <span>•</span>
              <span>Understanding Energy</span>
              <span>•</span>
              <span>About Rates & Terms</span>
              <span>•</span>
              <span>Understanding Contracts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Summary Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Electric Generation Supplier Contract Summary
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each electric supplier must now give customers an Electric Generation Supplier Contract Summary when they enroll in a new contract. This is an easy-to-read, one-page document which includes the following information:
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left p-4 font-bold text-gray-900 bg-blue-50">Term</th>
                    <th className="text-left p-4 font-bold text-gray-900 bg-blue-50">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Electric Generation Supplier Information</td>
                    <td className="p-4 text-gray-700">Name, telephone number, website, etc. Plain language statement that the supplier is responsible for generation charges.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Price Structure</td>
                    <td className="p-4 text-gray-700">Fixed or variable. If variable, based on what? If variable, how often is the rate expected to vary? If variable, give any applicable ranges/ceilings.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Generation/Supply Price</td>
                    <td className="p-4 text-gray-700">$/kWh or ¢/kWh. If variable rate, the first billing cycle's rate. Any introductory rate with length of term.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Generation Price at Various Usage Levels</td>
                    <td className="p-4 text-gray-700">Price per kWh for usages at: 500 kWh, 1,000 kWh, 2,000 kWh. Required only if the price varies by usage and/or there are fees in addition to the per kWh price.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Statement Regarding Services</td>
                    <td className="p-4 text-gray-700">Plain language that the supply price may not always provide savings to the customer.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Deposit Requirements</td>
                    <td className="p-4 text-gray-700">Any deposit requirements necessary for a customer and any terms associated with that deposit, in plain language.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Incentives</td>
                    <td className="p-4 text-gray-700">Any bonuses, discounts, cashback, etc., offers and any associated terms, in plain language. Required only if the supplier is offering any special incentives.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Contract Start Date</td>
                    <td className="p-4 text-gray-700">Plain language regarding start of EGS service (meter reads/billing cycles/etc.).</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Contract Duration/Length</td>
                    <td className="p-4 text-gray-700">In months, billing cycles, etc.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Cancellation/Early Termination Fees</td>
                    <td className="p-4 text-gray-700">Yes or no. If yes, describe the amount of the fee and how to avoid that fee, if possible.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">End of Contract</td>
                    <td className="p-4 text-gray-700">Treatment of customer at end of contract. Timing of notices.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Right of Rescission</td>
                    <td className="p-4 text-gray-700">An explanation of the customer's 3-day right of rescission and how to exercise this right.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Canceling an Agreement Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Canceling an Agreement
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Before switching suppliers, carefully review your contract's disclosure statement to see if there are any penalty/switching fees or cancellation fees. Call your current supplier if you are not sure.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Switching back to your electric distribution company comes with no cost.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-yellow-800">Important Note</h3>
                    <p className="text-yellow-700 mt-1">
                      Always review your contract terms before making any changes to avoid unexpected fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Check for Fees</h3>
                    <p className="text-gray-600">Review your contract for cancellation penalties</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Contact Supplier</h3>
                    <p className="text-gray-600">Call your current supplier for clarification</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">No Cost Return</h3>
                    <p className="text-gray-600">Switch back to utility with no fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Renewal Notice Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contract Renewal Notice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You will receive two renewal notices before your contract expires - one 45-60 days prior and the other 30 days prior.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">First Notice</h3>
                  <p className="text-gray-600">45-60 days prior to expiration</p>
                </div>
              </div>
              <p className="text-gray-700">
                Initial notification that your contract is approaching expiration with basic information about your options.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Option Notice</h3>
                  <p className="text-gray-600">30 days prior to expiration</p>
                </div>
              </div>
              <p className="text-gray-700">
                Detailed notice with specific changes, new prices, and clear action steps you must take.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-12">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-yellow-800 mb-4">IMPORTANT</h3>
                <p className="text-yellow-700 mb-4">
                  If you choose to take no action with your renewal and options notices, your rate may change. For example, a fixed rate may change to a monthly variable rate. If you have a variable rate, once the term expires, you may be moved to a different variable rate that could be higher.
                </p>
                <p className="text-yellow-700">
                  Make sure you read these notices, as they will assist you in making the decision to stay with your current supplier or shop for another supplier.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included in the Option Notice</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Specific changes to the terms being proposed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Information on new prices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Explanation of customer options</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Date by which action must be taken</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Contact information for Commission</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Office of Consumer Advocate (OCA) details</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about energy contracts and switching suppliers
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What if my current contract has an early cancellation fee?
              </h3>
              <p className="text-gray-700 mb-4">
                Check your disclosure or contract summary to see if there is an early cancellation fee. You can also contact your current supplier and ask – their phone number is on your bill.
              </p>
              <p className="text-gray-700">
                If you do have an early cancellation fee, you can still switch suppliers, but if you do this before the end of your contract you may have to pay the early cancellation fee (early cancellation fees do not apply in the last 30 days of your contract – so you are free to shop during this time).
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Can I switch my generation service from a competitive supplier back to my electric utility?
              </h3>
              <p className="text-gray-700 mb-4">
                Yes, you just have to contact your electric utility and request to return to your default service.
              </p>
              <p className="text-gray-700">
                You should review your agreement with your current supplier to see if there are penalties for early cancellation if you wish to do this in the middle of your current contract. If you are not sure, call your current supplier.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How will I receive my two contract renewal notices?
              </h3>
              <p className="text-gray-700 mb-4">
                You will receive your first notice depending upon how you agreed to receive notices from your supplier – check your disclosure or call your supplier if you have questions about this.
              </p>
              <p className="text-gray-700">
                You will receive your second notice in writing by U.S. postal mail.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What happens if I do not respond to the options notice?
              </h3>
              <p className="text-gray-700 mb-4">
                It is important that you respond to your notices and take action. If you do not respond to your contract expiration notices, your supplier can continue to provide you with service – but it may be at different terms and prices.
              </p>
              <p className="text-gray-700">
                Your notices will explain these new terms and prices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Will I be notified of price changes if I am on a variable rate?
              </h3>
              <p className="text-gray-700 mb-4">
                If your contract with your supplier expires and you do not respond to your expiration notices, your supplier can continue to serve you – but your terms and price may change.
              </p>
              <p className="text-gray-700">
                The supplier may even place you on a variable rate – but if they do, they must then provide you with advance notice of any future price changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white mt-0">
            Need Help Understanding Your Contract?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our team is here to help you understand your energy contract terms and find the best rates for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/about-rates">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 text-lg">
                Learn About Rates
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
