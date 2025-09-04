import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Building, Users, TrendingUp, CheckCircle, ArrowRight, FileText, Calculator, Zap, AlertTriangle, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How To Switch Power in Florida - Energy Provider Switching Guide',
  description: 'Learn how to switch electricity providers in Florida. Follow our easy 3-step guide to take control of your energy bill and find better rates.',
  keywords: 'switch electricity provider, Florida energy switching, change electric supplier, energy provider comparison, Florida power switch',
  openGraph: {
    title: 'How To Switch Power in Florida - Energy Provider Switching Guide',
    description: 'Learn how to switch electricity providers in Florida. Follow our easy 3-step guide to take control of your energy bill and find better rates.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Switch Power in Florida - Energy Provider Switching Guide',
    description: 'Learn how to switch electricity providers in Florida. Follow our easy 3-step guide to take control of your energy bill and find better rates.',
  },
}

export default function SwitchPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/switch.png"
            alt="Switch background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white max-w-6xl mx-auto">
              How To Switch Power in Florida
            </h1>
            <p className="text-xl text-blue-100 max-w-6xl mx-auto mb-8">
              If you live in a service area where electric suppliers compete, you can shop for new offers and promotions at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-500">›</span>
            <span className="text-gray-700">How To Switch</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Switch Electricity Providers</h2>
            <p className="text-xl text-gray-600 mb-8">
              Switching electricity suppliers is easier than you may think. Follow these three easy steps to take control of your bill.
            </p>
          </div>

          {/* Three Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Compare Offers</h3>
              </div>
              <p className="text-gray-600 mb-6">
                The Florida Public Service Commission's shopping tool makes it easy to compare gas supplier prices. Keep in mind that competitive offers may not be available in all areas.
              </p>
              <p className="text-gray-600 mb-6">
                If you are comparing suppliers outside of this website, you can look for its name on our list of licensed suppliers.
              </p>
              <Link href="/business">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Compare Offers
                </Button>
              </Link>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sign Up With Your New Supplier</h3>
              </div>
              <p className="text-gray-600 mb-6">
                You are free to sign up for service with a new electric supplier by calling them or signing up on their website. Review your agreement with your current supplier before shopping for a new supplier to see if there are any penalties for early cancellation.
              </p>
              <p className="text-gray-600">
                If you are not sure, call your current supplier.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Receive Written Terms and Conditions</h3>
              </div>
              <p className="text-gray-600">
                Your new supplier will send you a written disclosure statement explaining your terms and conditions.
              </p>
            </div>
          </div>

          {/* Working with a Third Party */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mb-12">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Working with a Third Party</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Some companies provide assistance in finding new electric suppliers. This could be a consultant who helps customers shop for suppliers or an intermediary who manages billing for clients. The FL PSC urges customers to use caution when paying through a third party.
            </p>
            <p className="text-gray-700">
              If consultants accept payment or handles billing, they must be licensed by the FL PSC.
            </p>
          </div>

          {/* Florida Clean Energy */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-12">
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Florida Clean Energy</h3>
            </div>
            <p className="text-gray-700 mb-4">
              The Alternative Energy Portfolio Standards Act (AEPS) requires that a certain percentage of all electric energy sold to retail customers come from alternative energy sources.
            </p>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              Learn More About AEPS
            </Button>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why should I shop for electricity?</h3>
                <p className="text-gray-600">
                  Just like you shop for any household item, you can shop for an electricity supplier that has the best offer for your needs. Saving just one cent per kWh could translate into more than $100 a year in savings, depending on usage. Even though competitive offers may not be available in all areas, it's worth taking a look.
                </p>
                <p className="text-gray-600 mt-4">
                  You may also be interested in renewable and alternative energy, or different products like time-of-use.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How long will it take to switch to a new supplier?</h3>
                <p className="text-gray-600">
                  With Florida's accelerated switching rules, you can likely change electricity suppliers in three business days once the electric distribution company (EDC) is notified of the switch.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Is there a switching fee to change to a different supplier?</h3>
                <p className="text-gray-600">
                  This depends on the agreement you have with your current supplier. Review your agreement with your current supplier to see if there are any penalties for early cancellation. If you are not sure, call your current supplier.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Can I switch my generation service from a competitive supplier back to my electric utility?</h3>
                <p className="text-gray-600">
                  Yes, you just have to contact your electric utility and request to return to your default service. You should review your agreement with your current supplier to see if there are penalties for early cancellation if you wish to do this in the middle of your current contract. If you are not sure, call your current supplier.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Will the supplier provide their rate at the beginning of the month or in advance of the service being used?</h3>
                <p className="text-gray-600">
                  Your disclosure and contract summary should tell you the price you agreed to pay when you enrolled with your supplier. If you have any questions, contact your supplier. Their phone number is on your bill.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Can the supplier provide historic pricing information?</h3>
                <p className="text-gray-600">
                  Historical pricing information may not be available for all products. However, Florida regulations require suppliers to provide up to two years of historical pricing data upon a customer's request if the supplier is offering you a variable price.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Are all taxes included in the supplier's price?</h3>
                <p className="text-gray-600">
                  For residential customers, all applicable taxes are included in the price presented by the supplier. However, if the service is for a second home or property that you rent out, sales tax may apply.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How do I switch to a new supplier if I already have an existing one?</h3>
                <p className="text-gray-600">
                  The process is the same with all supplier switching – go shopping – and select the supplier of your choice. Your new supplier will then put into motion the switch. But before shopping for a new supplier, review your agreement with your current supplier to see if there are any penalties for early cancellation. If you are not sure, call your current supplier.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Resources</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">About Rates & Terms</h3>
                </div>
                <p className="text-gray-600 mb-4">See what type of rate is the best for you.</p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Learn More
                </Button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Calculator className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Understanding Contracts</h3>
                </div>
                <p className="text-gray-600 mb-4">Become an expert in terms and terminology.</p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  Learn More
                </Button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Understanding Your Bill</h3>
                </div>
                <p className="text-gray-600 mb-4">Learn what the individual charges mean.</p>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Switch Your Energy Provider?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-6xl mx-auto">
            Take control of your energy bill today. Compare rates and find the best electricity plan for your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Phone className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">(813) 699-1722</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Mail className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">support@utilitychoiceprogram.com</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18136991722">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                CALL US NOW
              </Button>
            </a>
            <Link href="/business">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 text-lg rounded-full backdrop-blur-sm">
                COMPARE OFFERS
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
