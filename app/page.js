"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import emailjs from '@emailjs/browser';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
  Award,
  Users,
  Coffee,
  ExternalLink,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Phone,
  Send,
  Instagram,
} from "lucide-react"
import Image from "next/image"
import ProfileImg from "../public/HD_PROFILE.png"
import Link from "next/link"
import toast from "react-hot-toast"
export default function Home() {
  // Navigation state
  const [isScrolled, setIsScrolled] = useState(false)

  // Section visibility states
  const [heroVisible, setHeroVisible] = useState(false)
  const [aboutVisible, setAboutVisible] = useState(false)
  const [projectsVisible, setProjectsVisible] = useState(false)
  const [experienceVisible, setExperienceVisible] = useState(false)
  const [contactVisible, setContactVisible] = useState(false)
  const [loading, setloading] = useState(false)

  useEffect(() => emailjs.init("NWSw_RMc0EBivXx91"), []);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  })

  // Refs for intersection observers
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const experienceRef = useRef(null)
  const contactRef = useRef(null)

  // Navigation scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Hero visibility
  useEffect(() => {
    setHeroVisible(true)
  }, [])

  // Intersection observers for sections
  useEffect(() => {
    const observerOptions = { threshold: 0.1 }

    const aboutObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setAboutVisible(true),
      observerOptions,
    )

    const projectsObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setProjectsVisible(true),
      observerOptions,
    )

    const experienceObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setExperienceVisible(true),
      observerOptions,
    )

    const contactObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setContactVisible(true),
      observerOptions,
    )

    if (aboutRef.current) aboutObserver.observe(aboutRef.current)
    if (projectsRef.current) projectsObserver.observe(projectsRef.current)
    if (experienceRef.current) experienceObserver.observe(experienceRef.current)
    if (contactRef.current) contactObserver.observe(contactRef.current)

    return () => {
      aboutObserver.disconnect()
      projectsObserver.disconnect()
      experienceObserver.disconnect()
      contactObserver.disconnect()
    }
  }, [])

  // Utility functions
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Data
  const skills = [
    {
      name: "Frontend Development",
      icon: Globe,
      skills: ["React", "Next.js", "JavaScript", "Bootstrap", "Tailwind CSS"],
      level: 95,
    },
    {
      name: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express"],
      level: 90,
    },
    {
      name: "Database",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Mongoose", "Sequelize"],
      level: 89,
    },
    {
      name: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "Java", "Python", "PHP", "JavaScript", "SQL"],
      level: 85,
    },
    {
      name: "Web Tools & Deployment",
      icon: Smartphone,
      skills: ["Vercel", "Git", "GitHub", "Cloudinary", "Render"],
      level: 90,
    },
  ];


  const stats = [
    { icon: Award, label: "Projects Completed", value: "30+" },
    { icon: Users, label: "Happy Clients", value: "20+" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
  ]

  const projects = [
    {
      title: "ETail",
      description:
        "A full-stack e-commerce website with product management, user authentication, and order tracking.",
      image: "./etail1.jpg",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/AnuragKapoor19/Etail",
      live: "https://etail-frontend.onrender.com",
      featured: true,
    },
    {
      title: "Blogify",
      description:
        "A full-stack blogging platform built with Next.js, featuring authentication, CRUD posts, and Context API for state management.",
      image: "./blog1.jpg",
      technologies: ["Next.js", "Bootstrap", "Context API", "MongoDB"],
      github: "https://github.com/AnuragKapoor19/Blogify",
      live: null,
      featured: true,
    },
    {
      title: "QuizWhiz",
      description:
        "A trivia quiz application with categorized questions, difficulty levels, and MySQL database integration.",
      image: "./quiz1.jpg",
      technologies: ["MongoDB", "Express", "React", "Node.js", "MySQL"],
      github: "https://github.com/AnuragKapoor19/quizwhiz",
      live: "https://quizwhiz-frontend.onrender.com",
      featured: true,
    },
    // {
    //   title: "Voice-to-Text App",
    //   description:
    //     "A React.js application that converts spoken words into text in real-time.",
    //   image: "/voice-to-text.png",
    //   technologies: ["React.js", "Speech Recognition API"],
    //   github: "#",
    //   live: "#",
    //   featured: false,
    // },
    {
      title: "Real-time Chat App",
      description:
        "A chat application with real-time messaging, user authentication, and MongoDB for message storage.",
      image: "./chat1.jpeg",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
      github: "https://github.com/AnuragKapoor19/VGossip",
      live: null,
      featured: false,
    },
    {
      title: "Food Ordering Website",
      description:
        "A MERN-based food ordering platform with menu browsing, cart management, and order tracking.",
      image: "./food5.jpg",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/AnuragKapoor19/Foodies",
      live: null,
      featured: false,
    },
    {
      title: "Real-time News App",
      description:
        "A MERN stack news application that fetches and displays real-time news updates from external APIs.",
      image: "./news1.jpg",
      technologies: ["MongoDB", "Express", "React", "Node.js", "News API"],
      github: "https://github.com/AnuragKapoor19/NewTidings",
      live: "https://anuragkapoor19.github.io/NewTidings",
      featured: false,
    },
  ];


  const experiences = [
    {
      type: "work",
      title: "Associate Software Developer",
      company: "Code Optimal Solutions",
      location: "Punjab, India",
      period: "2025 - Present",
      description:
        "Working as a Full Stack Web Developer, focusing on building and maintaining scalable applications using the MERN stack and Next.js. Responsible for developing APIs, managing databases, and deploying applications on modern platforms. Collaborating with teams to deliver optimized, user-friendly solutions.",
      technologies: ["React", "Next.js", "Tailwind", "Express", "Node.js", "MySQL"],
    },
    {
      type: "internship",
      title: "Software Development Intern",
      company: "Bharat Intern",
      location: "Remote",
      period: "Summer 2024",
      description:
        "Contributed to the development of full - stack web applications using the MERN stack.Gained practical experience in building responsive frontends, designing RESTful APIs, and integrating MySQL and MongoDB databases.Collaborated on real - world projects to enhance problem - solving and deployment skills.",
      technologies: ["React", "Bootstrap", "Express", "Node.js", "MongoDb"],
    },
    {
      type: "education",
      title: "Bachelor of Computer Applications (BCA)",
      company: "Guru Nanak Dev University",
      location: "Punjab, India",
      period: "2022 - 2025",
      description:
        "Focused on software engineering, algorithms, and database systems. Active in coding competitions.",
      technologies: ["Data Structures", "Algorithms", "Software Engineering", "Database Design"],
    },
    {
      type: "education",
      title: "12th Non-Medical",
      company: "Modern High School (CBSE)",
      location: "Punjab, India",
      period: "2020 - 2022",
      description:
        "Studied Physics, Chemistry, and Mathematics with focus on problem-solving, logical reasoning, and analytical skills.",
      technologies: ["Physics", "Chemistry", "Mathematics"],
    },
    {
      type: "education",
      title: "10th",
      company: "Model Study High School (ICSE)",
      location: "Punjab, India",
      period: "2019 - 2020",
      description: "Completed 10th grade with a strong foundation in core numbers, developing problem-solving and analytical skills.",
      technologies: ["Mathematics", "Science", "Computer Basics"]
    }
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: "anuragkapoor.ak47@gmail.com", href: "mailto:anuragkapoor.ak47@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7986704577", href: "tel:+917986704577" },
    { icon: MapPin, label: "Location", value: "Amritsar, Punjab, India", href: "#" },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/anuragkapoor19", color: "hover:text-indigo-400" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/anuragkapoor19/", color: "hover:text-indigo-400" },
    { icon: Instagram, label: "Twitter", href: "https://www.instagram.com/me_anuragkaps/", color: "hover:text-indigo-400" },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()

    let name = formData.name
    let email = formData.email
    let number = formData.number
    let msg = formData.message

    if (name === '' || email === '' || msg === '') {
      if (name === '') {
        toast.error("Please enter your name",
          {
            style: {
              fontSize: '1rem',
              fontFamily: 'sans-serif',
              backgroundColor: '#89023E',
              border: '4px solid white',
              fontWeight: 'bolder',
              color: 'white'
            }
          })
      }
      else if (email === '') {
        toast.error("Please enter your email", {
          style: {
            fontSize: '1rem',
            fontFamily: 'sans-serif',
            backgroundColor: '#89023E',
            border: '4px solid white',
            fontWeight: 'bolder',
            color: 'white'
          }
        })
      }
      else {
        toast.error("Please enter your message", {
          style: {
            fontSize: '1rem',
            fontFamily: 'sans-serif',
            backgroundColor: '#89023E',
            border: '4px solid white',
            fontWeight: 'bolder',
            color: 'white'
          }
        })
      }
    }
    else {
      setloading(true)
      const serviceId = "service_vdim83e";
      const templateId = "template_oqpeqfx";
      const params = {
        name: name,
        email: email,
        number: number,
        msg: msg
      }
      await emailjs.send(serviceId, templateId, params).then(() => {
        setTimeout(() => {
          setFormData({ name: "", email: "", number: "", message: "" })
          setloading(false)
          toast.success("Message Sent Successfully", {
            style: {
              fontSize: '1rem',
              fontFamily: 'sans-serif',
              backgroundColor: '#89023E',
              border: '4px solid white',
              fontWeight: 'bolder',
              color: 'white'
            }
          })
        }, 3000)
      }).catch((error) => {
        setloading(false)
        console.log(error)
        toast.error(`Server Error! Please Try Again Later : ${error.message}`, {
          style: {
            fontSize: '1rem',
            fontFamily: 'sans-serif',
            backgroundColor: '#89023E',
            border: '4px solid white',
            fontWeight: 'bolder',
            color: 'white'
          }
        })
        setFormData({ name: "", email: "", number: "", message: "" })
      })
    }
  }

  return (
    // Root: dark theme wrapper. If your tailwind config uses `darkMode: 'class'`, this forces dark styling.
    <main className="min-h-screen bg-[#071024] text-gray-100 antialiased">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-[#071024]/95 backdrop-blur-md border-b border-[#0f1724]/50"
          : "bg-[#071024]/78 backdrop-blur-sm"
          }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-teal-300 to-indigo-300 hover:opacity-95 cursor-pointer">
              AK
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-200 hover:text-indigo-300 transition-all duration-300 hover:scale-105 relative group font-medium"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-700/18 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-teal-600/14 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-700/10 rounded-full blur-2xl animate-pulse delay-500" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-2xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-900/10 to-teal-900/10 rounded-full blur-3xl" />
        </div>

        <div
          className={`container mt-20 mx-auto px-6 text-center z-10 transition-all duration-1500 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-6xl mx-auto">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <Image
                      src={ProfileImg}
                      alt="Professional Profile"
                      width={300}
                      height={300}
                      className="floating-animation rounded-full border-4 border-cyan-400 shadow-[0_0_20px_rgba(50,153,194,0.8)] animate-glow"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>



            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white animate-fade-in-up">
              Hi, I'm{" "}
              <span className="text-white drop-shadow-[0_2px_10px_rgba(0,212,255,0.8)] [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
                Anurag Kapoor
              </span>
            </h1>

            <h2 className="text-3xl md:text-5xl mb-8 font-medium animate-slide-in-left">
              <span className="text-indigo-300 animate-pulse-glow">Full Stack</span>{" "}
              <span className="text-teal-300 animate-pulse-glow">Web Developer</span>
            </h2>

            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-300 animate-slide-in-right">
              Crafting innovative digital experiences with cutting-edge technologies. Passionate about building
              scalable, user-centric applications that solve real-world problems and drive meaningful impact in the
              digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="cursor-pointer bg-gradient-to-r from-indigo-600 to-teal-500 text-white border-0 px-10 py-5 text-xl font-bold shadow-2xl hover:opacity-95"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer bg-[#071024]/60 backdrop-blur-md border-2 border-teal-600/30 text-white hover:bg-teal-600/8 px-10 py-5 text-xl font-bold"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
              <Link href="./MyResume.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-pointer bg-[#071024]/60 backdrop-blur-md border-2 border-gray-700/30 text-white hover:bg-gray-800/40 px-10 py-5 text-xl font-bold"
                >
                  <Download className="w-6 h-6 mr-3" />
                  Download CV
                </Button>
              </Link>
            </div>

            <div className="flex justify-center space-x-8">
              {[
                { icon: Github, href: "https://github.com/anuragkapoor19", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/anuragkapoor19/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:anuragkapoor.ak47@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-4 rounded-full border border-white/6 hover:border-indigo-400 transition-all duration-500 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-7 h-7 text-gray-200 hover:text-indigo-300 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce p-4"
        >
          <ArrowDown className="w-8 h-8 text-indigo-300" />
        </Button> */}
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-10 w-64 h-64 bg-indigo-900/6 rounded-full blur-3xl animate-pulse delay-500" />
          <div className="absolute bottom-40 right-10 w-80 h-80 bg-teal-900/6 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div
            className={`transition-all duration-1000 ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-teal-300">Me</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I'm a passionate full-stack developer with experience building scalable web applications. I
                love turning complex problems into simple, beautiful, and intuitive solutions that make a real
                difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-6 text-center rounded-lg bg-[#0b1220] border border-[#11202b] hover:shadow-lg ${aboutVisible ? "animate-fade-in-up" : ""
                    }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <stat.icon className="w-12 h-12 text-indigo-300 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {skills.map((category, index) => (
                <Card
                  key={category.name}
                  className={`p-0 bg-[#071024] border border-[#0f1724] rounded-lg ${aboutVisible ? "animate-fade-in-up" : ""
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-indigo-900/10 mr-3">
                        <category.icon className="w-6 h-6 text-indigo-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1 text-white">{category.name}</h3>
                        <div className="w-full rounded-full h-2 mb-2 bg-gray-800">
                          <div
                            className="skill-bar h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: aboutVisible ? `${category.level}%` : "0%",
                              transitionDelay: `${index * 200 + 500}ms`,
                              background: "linear-gradient(90deg,#6366f1,#14b8a6)",
                            }}
                          />
                        </div>
                        <span className="text-sm text-gray-300">{category.level}%</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-indigo-900/20 text-indigo-300 px-2 py-1 rounded"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Card className="max-w-4xl mx-auto bg-[#071024] border border-[#0f1724]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-left">
                      <p className="text-gray-300 leading-relaxed mb-4">
                        Started my journey as a curious computer science student, I've evolved into a versatile
                        full-stack developer. I specialize in creating seamless user experiences with modern
                        technologies like React, Next.js, and Node.js.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                        projects, or mentoring aspiring developers. I believe in continuous learning and staying ahead
                        of the curve in this ever-evolving tech landscape.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse delay-200"></div>
                        <span className="text-sm text-gray-300">MERN Stack Expert</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-400"></div>
                        <span className="text-sm text-gray-300">Open Source Contributor</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse delay-600"></div>
                        <span className="text-sm text-gray-300">Continuous Learner</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20">
        <div className="container mx-auto px-6">
          <div
            className={`transition-all duration-1000 ${projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Featured <span className="text-teal-300">Projects</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Here are some of my recent projects that showcase my skills in full-stack development, UI/UX design, and
                problem-solving.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className={`group transition-all duration-300 hover:scale-105 overflow-hidden bg-[#071024] border border-[#0f1724] ${project.featured ? "md:col-span-2 lg:col-span-1" : ""
                    } ${projectsVisible ? "animate-fade-in-up" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden bg-[#071024]">
                    <Image
                      src={project.image || "./placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071024]/80 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-teal-600/30 text-teal-300 hover:bg-teal-700/8"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-colors duration-300"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>

                      {project.live && (
                        <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-20 bg-[#071024]/40">
        <div className="container mx-auto px-6">
          <div
            className={`transition-all duration-1000 ${experienceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                My <span className="text-teal-300">Journey</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                A timeline of my professional experience, education, and key milestones that have shaped my career in
                software development.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-white" />

                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      } ${experienceVisible ? "animate-slide-in-left" : ""}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-300 rounded-full border-4 border-[#071024] z-10" />

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                      <Card className="bg-[#071024] border border-[#0f1724]">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            {exp.type === "education" ? (
                              <GraduationCap className="w-5 h-5 text-teal-300" />
                            ) : (
                              <Briefcase className="w-5 h-5 text-indigo-300" />
                            )}
                            <Badge
                              variant={exp.type === "education" ? "secondary" : "default"}
                              className={
                                exp.type === "education"
                                  ? "bg-teal-700/10 text-teal-300"
                                  : "bg-indigo-700/10 text-indigo-300"
                              }
                            >
                              {exp.type === "work" ? "Work" : exp.type === "internship" ? "Internship" : "Education"}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                          <div className="space-y-1 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-white">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-gray-300" />
                                <span className="text-gray-300">{exp.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4 text-gray-300" />
                                <span className="text-gray-300">{exp.period}</span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="border-gray-700 text-gray-300 hover:border-indigo-400 hover:text-indigo-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20">
        <div className="container mx-auto px-6">
          <div
            className={`transition-all duration-1000 ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get In <span className="text-teal-300">Touch</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together
                to bring your ideas to life.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className={`${contactVisible ? "animate-slide-in-left" : ""} bg-[#071024] border border-[#0f1724]`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-teal-300">Send Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-200">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-[#0b1220] border border-[#12202b] text-gray-100 focus:border-teal-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-200">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-[#0b1220] border border-[#12202b] text-gray-100 focus:border-teal-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="number" className="text-gray-200">Number</Label>
                      <Input
                        id="number"
                        name="number"
                        type="tel"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="1234567890"
                        className="bg-[#0b1220] border border-[#12202b] text-gray-100 focus:border-teal-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-200">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={6}
                        required
                        className="bg-[#0b1220] border border-[#12202b] text-gray-100 focus:border-teal-400 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-teal-400 hover:bg-teal-500 text-[#071024] font-semibold"
                      size="lg"
                    >
                      {loading ? "Sending..."
                        :
                        (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )
                      }
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className={`space-y-8 ${contactVisible ? "animate-fade-in-up" : ""}`} style={{ animationDelay: "200ms" }}>
                <Card className="bg-[#071024] border border-[#0f1724]">
                  <CardHeader>
                    <CardTitle className="text-2xl text-teal-300">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info) => (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#0b1220]/60 transition-colors group"
                      >
                        <div className="p-2 rounded-full bg-indigo-900/10">
                          <info.icon className="w-5 h-5 text-teal-300" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{info.label}</p>
                          <p className="text-gray-300 group-hover:text-teal-300 transition-colors">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-[#071024] border border-[#0f1724]">
                  <CardHeader>
                    <CardTitle className="text-2xl text-teal-300">Follow Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-full border border-[#0f1724] hover:border-teal-300 transition-all duration-300 hover:scale-110 ${social.color}`}
                          aria-label={social.label}
                        >
                          <social.icon className="w-6 h-6 text-gray-300 hover:text-teal-300 transition-colors" />
                        </a>
                      ))}
                    </div>
                    <p className="text-gray-300 mt-4 text-sm">
                      Let's connect and stay in touch! I'm always happy to chat about technology, projects, or potential
                      collaborations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
