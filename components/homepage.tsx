import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image';

interface SkillSectionProps {
  title: string;
  skills: string[];
}

interface ProjectCardProps {
  title: string;
  description: string;
}

function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Button key={skill} variant="outline" size="sm" className="rounded-full hover:bg-gray-800">
            {skill}
          </Button>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <div className="bg-gray-800 h-40 rounded-md mb-4"></div>
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <Button variant="outline" size="sm" className="hover:bg-gray-800">View Project</Button>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="text-white">
      <div className="w-[55%] md:mt-20 sm:mt-4 mx-auto px-4">
      

        {/* Profile Section */}
        <section className="relative mb-16">
        <div className="relative h-52 w-full rounded-lg overflow-hidden">
            <Image
              src="/banner3.jpg"  // Replace with your image path
              alt="Profile background"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="absolute bottom-0 left-8 transform translate-y-1/2 w-24 h-24 bg-backgrou rounded-full border-4 border-backgrou overflow-hidden">
            <img src="/avatar.jpg" alt="Amogelang Moatswi" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-4 right-4">
            <Button variant="mineghost"  className="transition-all duration-300 ease-in-out transform hover:scale-105">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for Work
            </Button>
          </div>
        </section>

        {/* Details Section */}
        <section className="mt-16">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold mb-2">Amogelang Moatswi</h2>
              <p className="text-gray-400 mb-1">Developer / Network Engineer / Graphic Designer</p>
              <p className="text-gray-500 text-sm mb-4">Gaborone, Botswana, Africa</p>
            </div>
            <div className="flex space-x-2">
            <Button variant="mine" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="mine" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="mine" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="mine" size="icontext">
              <Mail className="h-4 w-4" />
              <span className="ml-2">Hire Me</span>
              </Button>
            </div>
          </div>

          {/* About Me */}
          <div className="mt-8 mb-12">
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-300">
              I'm a passionate developer and designer with a knack for creating seamless digital experiences. 
              With a background in network engineering, I bring a unique perspective to every project, 
              focusing on both functionality and aesthetics.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SkillSection title="Development" skills={['JavaScript', 'React', 'Next.js', 'MongoDB', 'Git & GitHub']} />
              <SkillSection title="Design" skills={['Branding & Identity', 'UX', 'Framer Motion', 'Tailwind CSS']} />
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard 
                title="E-commerce Platform" 
                description="A full-stack online store built with Next.js and MongoDB" 
              />
              <ProjectCard 
                title="Portfolio Website" 
                description="A responsive portfolio site showcasing my latest work" 
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}