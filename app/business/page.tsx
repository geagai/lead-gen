import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Building, Users, TrendingUp, CheckCircle, ArrowRight, FileText, Calculator, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shop for Business - Florida Energy Solutions',
  description: 'Lower your energy costs or find electric services that fit the needs of your business in Florida.',
  keywords: 'business energy, commercial electricity, Florida energy rates, business energy plans, commercial energy solutions',
  openGraph: {
    title: 'Shop for Business - Florida Energy Solutions',
    description: 'Lower your energy costs or find electric services that fit the needs of your business in Florida.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop for Business - Florida Energy Solutions',
    description: 'Lower your energy costs or find electric services that fit the needs of your business in Florida.',
  },
}

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/business.png"
            alt="Business background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Shop for Business
            </h1>
            <p className="text-xl text-blue-100 max-w-5xl mx-auto mb-8">
              Lower your energy costs or find electric services that fit the needs of your business.
            </p>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 inline-flex">
              <Building className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">The Official Electric Shopping Website of the Florida Public Service Commission</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-500">›</span>
            <span className="text-gray-700">Shop for Business</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600 mb-6">
              Individual suppliers determine the eligibility for their small business vs. large business offers, which may vary from supplier to supplier.
            </p>
          </div>

          {/* Small Business Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Shop For Your Small Business</h2>
            <p className="text-gray-600 mb-8">
              Compare electricity suppliers and rates to lock in your small business's new electric plan. Eligibility for small business plans vary from supplier to supplier.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Suppliers are responsible for posted prices. Please consult the supplier for prices, including introductory prices, deposits required, renewable energy add-on options, cancellation policies and any other discounts that may be available to you.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">See what offers are available in your area.</h3>
              <p className="text-blue-800 mb-4">You'll need a copy of a recent electric bill for steps 2-5.</p>
              
              {/* Step 1 */}
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Step 1 of 5</h4>
                <p className="text-gray-600 mb-4">Enter your <strong>small business's zip code</strong> to show the correct distributor for your area.*</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Zip Code" 
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Small Business
                  </Button>
                </div>
                <div className="flex justify-between mt-6">
                  <Button variant="outline" className="border-gray-300 text-gray-700">
                    Back
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Next
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/signup">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Get Started with Small Business Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Large Business Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Shop For Your Large Business</h2>
            <p className="text-gray-600 mb-8">
              Lower your energy costs or find electric services that fit the needs of your large business. Brokers work as a middleman between you and the supplier and may help you find a lower rate.
            </p>
            <p className="text-gray-600 mb-8">
              To see which suppliers and brokers can service your large business, enter your zip code below.
            </p>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Zip Code</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder="Enter your zip code" 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  Find Large Business Options
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Resources for Small Business Owners</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">About Rates and Terms</h3>
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
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Business Energy Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive energy solutions tailored to meet the unique needs of businesses in Florida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Optimization</h3>
              <p className="text-gray-600">Find the best rates and plans to reduce your energy costs and improve your bottom line.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Consultation</h3>
              <p className="text-gray-600">Get personalized advice from energy experts who understand Florida's unique energy market.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reliable Service</h3>
              <p className="text-gray-600">Count on dependable energy solutions that keep your business running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Lower Your Business Energy Costs?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-5xl mx-auto">
            Get started today with a free consultation and find the best energy plan for your business.
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
            <Link href="/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 text-lg rounded-full backdrop-blur-sm">
                GET STARTED
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
