import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Clock, Shield, Zap, Users, TrendingUp, Star, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Utility Choice Program - Energy Solutions for Residential and Business Needs',
  description: 'Professional energy solutions for residential and business needs. Find competitive rates, reliable service, and expert consultations for all your energy requirements.',
  keywords: 'energy rates, electricity plans, utility choice, energy savings, residential energy, business energy',
  openGraph: {
    title: 'Utility Choice Program - Energy Solutions for Residential and Business Needs',
    description: 'Professional energy solutions for residential and business needs. Find competitive rates, reliable service, and expert consultations for all your energy requirements.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utility Choice Program - Energy Solutions for Residential and Business Needs',
    description: 'Professional energy solutions for residential and business needs.',
  },
}

export default async function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://upqlsoehxvgvneyrwxdg.supabase.co/storage/v1/object/public/files/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Need A New</span>
              <span className="block text-yellow-400">Energy Service Provider?</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Serving Your Local Area with Professional Energy Solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="font-semibold">(813) 699-1722</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="font-semibold">support@UtilityChoiceProgram.com</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Sign Up Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 text-lg rounded-full backdrop-blur-sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse">
          <div className="w-6 h-6 bg-white/20 rounded-full"></div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              WHAT WE DO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'll Help You Find The Best Energy Rate & Plan That Fits Your Needs.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                We Never Sacrifice Integrity For Growth!
              </span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential</h3>
              <p className="text-gray-600">Tailored energy solutions for homeowners with competitive rates and reliable service.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business</h3>
              <p className="text-gray-600">Comprehensive energy management for businesses of all sizes with cost optimization.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">COMPANY</h3>
              <p className="text-gray-600">Trusted partner with years of experience in energy consulting and customer service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plans Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Utility Choice Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Utility Choice offers a selection of rates and plans to meet the needs of customers from coast-to-coast. 
              Add in our great service and the opportunity to earn savings, and it's easy to see why thousands of people 
              consider us an amazing all-around value. We always put you first.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Summer Break Plan */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
                                 <h3 className="text-2xl font-bold mb-2 text-white mt-0">Summer Break</h3>
                <p className="text-orange-100">Take a vacation from high summer electricity bills</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Get 50% off your energy charges from June to September. How cool is that? 
                  Utility Choice gives you significant savings when you need it most — the summer months.
                </p>
                <div className="flex items-center text-green-600 font-semibold">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  50% Off Summer Rates
                </div>
              </div>
            </div>
            
            {/* Free & Clear Nights */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white">
                                 <h3 className="text-2xl font-bold mb-2 text-white mt-0">Free & Clear Nights</h3>
                <p className="text-blue-100">What will you do with your Free Nights?</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Enjoy more family time? Share a gourmet meal? Crank the A/C? 
                  Shifting your energy usage to evenings when it won't cost you a cent — that's value.
                </p>
                <div className="flex items-center text-green-600 font-semibold">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Free Night Energy
                </div>
              </div>
            </div>
            
            {/* Secure Savings */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white">
                                 <h3 className="text-2xl font-bold mb-2 text-white mt-0">Secure Savings</h3>
                <p className="text-green-100">Lock in great long-term rates</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Now, you can lock in a great long-term fixed rate and get bill relief when your usage increases. 
                  Utility Choice Secure Savings starts with a fixed rate and gives you automatic savings.
                </p>
                <div className="flex items-center text-green-600 font-semibold">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Fixed Rate Protection
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Available 'round the Clock</h3>
              <p className="text-gray-600">24/7 customer support and service availability for all your energy needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Assistance Guaranteed</h3>
              <p className="text-gray-600">Expert energy consultants with years of experience in the industry.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free Energy Consultations</h3>
              <p className="text-gray-600">Complimentary energy audits and personalized recommendations for your home or business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Trusted Energy Partner Since 2010
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Utility Choice Program started with a simple mission: to help customers find the best energy rates 
                and plans that fit their unique needs. Now, we're proudly serving customers across multiple states 
                with the same dedication to customer service and integrity.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-400 mr-2" />
                  <span className="font-semibold">#1 Rated</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-blue-400 mr-2" />
                  <span className="font-semibold">10,000+ Customers</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                             <h3 className="text-2xl font-bold mb-4 text-white mt-0">Why Choose Utility Choice?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>Competitive rates and transparent pricing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>Free energy consultations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>No hidden fees or surprises</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>Flexible payment options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                     <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white mt-0">
             Need Energy For Your Home or Small Business?
           </h2>
          <p className="text-xl text-blue-100 mb-8">
            Enjoy Bright Savings with Utility Choice Program
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Phone className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">(813) 699-1722</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Mail className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold">support@UtilityChoiceProgram.com</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              CALL US NOW
            </Button>
                         <Link href="/signup">
               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 text-lg rounded-full backdrop-blur-sm">
                 SIGN UP TODAY
               </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
                             <h3 className="text-2xl font-bold mb-2 text-white mt-0">Ready to Save on Your Energy Bill?</h3>
              <p className="text-gray-300">Get started today with a free consultation</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                             <Link href="/signup">
                 <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-full">
                   Get Started
                 </Button>
               </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 font-bold px-6 py-3 rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
