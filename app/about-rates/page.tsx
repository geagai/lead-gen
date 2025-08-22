import type { Metadata } from 'next'
import { CheckCircle, Clock, TrendingUp, Zap, Shield, Users, Building } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Rates & Terms - Understanding Energy Plans',
  description: 'Discover what makes each rate unique and explore new ways to save on your energy bill. Learn about fixed, variable, unlimited, and time-of-use rates.',
  keywords: 'energy rates, fixed rate, variable rate, unlimited rate, time of use, energy plans, utility terms',
  openGraph: {
    title: 'About Rates & Terms - Understanding Energy Plans',
    description: 'Discover what makes each rate unique and explore new ways to save on your energy bill.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Rates & Terms - Understanding Energy Plans',
    description: 'Discover what makes each rate unique and explore new ways to save on your energy bill.',
  },
}

export default function AboutRatesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
                         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white mt-0">
               About Rates & Terms
             </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Discover what makes each rate unique, and explore new ways to save on your energy bill.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-blue-200">
              <span>Home</span>
              <span>•</span>
              <span>Understanding Energy</span>
              <span>•</span>
              <span>About Rates & Terms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed, Variable & Unlimited Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Fixed, Variable & Unlimited
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn About the Differences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Fixed Rate */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Fixed Rate</h3>
                <p className="text-gray-600 font-semibold">Predictable per kWh rate</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Stays the same for at least 3 billing cycles</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Budget-friendly and predictable</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Protection from market fluctuations</p>
                </div>
              </div>
            </div>

            {/* Variable Rate */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Variable Rate</h3>
                <p className="text-gray-600 font-semibold">Market-based pricing</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Rates can change by the hour, day or month</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Depends on market fluctuations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Potential for lower rates during off-peak</p>
                </div>
              </div>
            </div>

            {/* Unlimited Rate */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Unlimited Rate</h3>
                <p className="text-gray-600 font-semibold">Subscription based</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Based on one monthly price for electric generation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">No usage-based billing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Ideal for high-usage households</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time of Use Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Time of Use
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                You can save money for using power during off-peak hours such as early morning or late night. Time of use programs from electricity suppliers allow you to pay a lower rate when using power during off-peak hours and a higher rate during on-peak hours.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Check if your electric supplier offers a time of use program in your area.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Learn About Time of Use
                  <Clock className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Off-Peak Hours</h3>
                    <p className="text-gray-600">Lower rates during early morning and late night</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">On-Peak Hours</h3>
                    <p className="text-gray-600">Higher rates during high-demand periods</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Smart Savings</h3>
                    <p className="text-gray-600">Optimize your usage to maximize savings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Offer Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Standard Offer Program</h2>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Looking to get a referral from the EDC? Through this program, EDCs make available a standard offer to all residential and small business customers who have not shopped their electric generation with a competitive supplier, as well as customers who have already shopped yet inquire about the program.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                  Learn About Standard Offer Program
                </Button>
              </Link>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Who Qualifies?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Residential customers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Small business customers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Those who haven't shopped with competitive suppliers</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Guaranteed competitive rates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No shopping required</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Reliable service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Contracts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Contracts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Know the lingo when it comes to kilowatt-per-hour rates and minimum contract term lengths.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kilowatt-Hour (kWh)</h3>
              <p className="text-gray-600">
                The standard unit for measuring electricity consumption. One kWh equals 1,000 watts used for one hour.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contract Terms</h3>
              <p className="text-gray-600">
                The length of time you're committed to a specific rate plan, typically ranging from 3 months to 3 years.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Early Termination</h3>
              <p className="text-gray-600">
                Fees that may apply if you switch providers before your contract term ends.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Read About Contract Terms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Understanding Your Bill Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Your Bill
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your current electric company to see a sample bill with the charges explained.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sample Bills</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get detailed explanations of your energy charges, including generation, transmission, and distribution costs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                View Sample Bills
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                     <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white mt-0">
             Ready to Find Your Perfect Energy Plan?
           </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let us help you understand your options and find the best rates for your energy needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg">
                Get Started Today
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
