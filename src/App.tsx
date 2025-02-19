import React, { useState } from 'react';
import Countdown from 'react-countdown';
import { Calendar, MapPin, Clock, Users, Mail, Twitter, Linkedin, Github, Menu, X, Mic, Building2 } from 'lucide-react';

const eventDate = new Date('2024-05-15');

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const speakers = [
    {
      name: 'Prof. Dr. Ayşe Yılmaz',
      title: 'Yapay Zeka Araştırmacısı',
      topic: 'Yapay Zekanın Geleceği',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Dr. Mehmet Kaya',
      title: 'İklim Bilimci',
      topic: 'Sürdürülebilir Gelecek',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Zeynep Demir',
      title: 'Teknoloji Girişimcisi',
      topic: 'Dijital Dönüşüm',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Ali Yıldız',
      title: 'Nörobilimci',
      topic: 'Beynin Sırları',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ];

  const teamMembers = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Organizatör',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      socials: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Zeynep Kaya',
      role: 'Program Koordinatörü',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      socials: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Mehmet Demir',
      role: 'Teknik Koordinatör',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      socials: { twitter: '#', linkedin: '#', github: '#' }
    }
  ];

  const sponsors = [
    {
      tier: 'Platin Sponsorlar',
      companies: [
        { name: 'Tech Corp', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { name: 'Future Inc', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' }
      ]
    },
    {
      tier: 'Altın Sponsorlar',
      companies: [
        { name: 'Innovation Labs', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { name: 'Digital Solutions', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold">TEDx İstanbul</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-red-500 transition-colors">Hakkında</a>
              <a href="#speakers" className="hover:text-red-500 transition-colors">Konuşmacılar</a>
              <a href="#sponsors" className="hover:text-red-500 transition-colors">Sponsorlar</a>
              <a href="#team" className="hover:text-red-500 transition-colors">Ekip</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-md py-4">
              <div className="flex flex-col space-y-4 px-4">
                <a href="#about" className="hover:text-red-500 transition-colors">Hakkında</a>
                <a href="#speakers" className="hover:text-red-500 transition-colors">Konuşmacılar</a>
                <a href="#sponsors" className="hover:text-red-500 transition-colors">Sponsorlar</a>
                <a href="#team" className="hover:text-red-500 transition-colors">Ekip</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="TEDx background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          {/* Social Media Icons */}
          <div className="absolute top-32 right-4 flex flex-col space-y-4">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-red-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-red-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-red-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>

          <h1 className="text-6xl font-bold mb-4">TEDx İstanbul 2024</h1>
          <p className="text-2xl mb-8">Fikirleri Keşfet, Geleceği Şekillendir</p>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8">
            <Countdown
              date={eventDate}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold">{days}</div>
                    <div className="text-sm">Gün</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold">{hours}</div>
                    <div className="text-sm">Saat</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold">{minutes}</div>
                    <div className="text-sm">Dakika</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold">{seconds}</div>
                    <div className="text-sm">Saniye</div>
                  </div>
                </div>
              )}
            />
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Bilet Al
          </button>
        </div>
      </div>

      {/* Event Details */}
      <div className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Calendar className="w-8 h-8 text-red-500" />
              <div>
                <h3 className="text-xl font-semibold">Tarih</h3>
                <p>15 Mayıs 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8 text-red-500" />
              <div>
                <h3 className="text-xl font-semibold">Konum</h3>
                <p>Lütfi Kırdar Kongre Merkezi</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="w-8 h-8 text-red-500" />
              <div>
                <h3 className="text-xl font-semibold">Saat</h3>
                <p>09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Etkinlik Hakkında</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            TEDx İstanbul 2024, yenilikçi fikirlerin, ilham verici hikayelerin ve çığır açan düşüncelerin buluşma noktası. 
            Bu yıl "Geleceği Şekillendiren Fikirler" teması altında, teknolojiden sanata, bilimden felsefeye uzanan geniş 
            bir yelpazede konuşmacılarımızla birlikte geleceğe ışık tutuyoruz.
          </p>
        </div>
      </div>

      {/* Speakers Section */}
      <div id="speakers" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Mic className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-4xl font-bold">Konuşmacılar</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-black/50 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{speaker.name}</h3>
                <p className="text-red-500 mb-2">{speaker.title}</p>
                <p className="text-gray-400">{speaker.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div id="sponsors" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Building2 className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-4xl font-bold">Sponsorlarımız</h2>
          </div>
          {sponsors.map((tier, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h3 className="text-2xl font-semibold text-center mb-8">{tier.tier}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {tier.companies.map((company, companyIndex) => (
                  <div key={companyIndex} className="bg-white/5 rounded-lg p-6 flex items-center justify-center transform hover:scale-105 transition-transform">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div id="team" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Users className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-4xl font-bold">Ekibimiz</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.socials.twitter} className="text-gray-400 hover:text-white">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.socials.linkedin} className="text-gray-400 hover:text-white">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.socials.github} className="text-gray-400 hover:text-white">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">TEDx İstanbul 2024</div>
            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5" />
              <span>iletisim@tedxistanbul.com</span>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;