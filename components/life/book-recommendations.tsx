"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const books = [
  {
    title: "Adhesive Particle Flow: A Discrete-Element Approach",
    description: "Adhesive Particle Flow: A Discrete-Element Approach offers a comprehensive treatment of adhesive particle flows at the particle level. This book adopts a particle-level approach oriented toward directly simulating the various fluid, electric field, collision, and adhesion forces and torques acting on the particles, within the framework of a discrete-element model. It is ideal for professionals and graduate students working in engineering and atmospheric and condensed matter physics, materials science, environmental science, and other disciplines where particulate flows have a significant role. The presentation is applicable to a wide range of flow fields, including aerosols, colloids, fluidized beds, and granular flows. It describes both physical models of the various forces and torques on the particles as well as practical aspects necessary for efficient implementation of these models in a computational framework.",
    amazonUrl: "https://a.co/d/0roZHYB",
  },
  {
    title: "Bioinformatics: Sequence and Genome Analysis",
    description: "As more species' genomes are sequenced, computational analysis of these data has become increasingly important. The second, entirely updated edition of this widely praised textbook provides a comprehensive and critical examination of the computational methods needed for analyzing DNA, RNA, and protein data, as well as genomes. The book has been rewritten to make it more accessible to a wider audience, including advanced undergraduate and graduate students. New features include chapter guides and explanatory information panels and glossary terms. New chapters in this second edition cover statistical analysis of sequence alignments, computer programming for bioinformatics, and data management and mining. Practically oriented problems at the ends of chapters enhance the value of the book as a teaching resource. The book also serves as an essential reference for professionals in molecular biology, pharmaceutical, and genome laboratories.",
    amazonUrl: "https://a.co/d/e0dag3i",
  },
  {
    title: "Information Theory, Inference, and Learning Algorithms",
    description: "Information theory and inference, often taught separately, are here united in one entertaining textbook. These topics lie at the heart of many exciting areas of contemporary science and engineering - communication, signal processing, data mining, machine learning, pattern recognition, computational neuroscience, bioinformatics, and cryptography. This textbook introduces theory in tandem with applications. Information theory is taught alongside practical communication systems, such as arithmetic coding for data compression and sparse-graph codes for error-correction. A toolbox of inference techniques, including message-passing algorithms, Monte Carlo methods, and variational approximations, are developed alongside applications of these tools to clustering, convolutional codes, independent component analysis, and neural networks. The final part of the book describes the state of the art in error-correcting codes, including low-density parity-check codes, turbo codes, and digital fountain codes -- the twenty-first century standards for satellite communications, disk drives, and data broadcast. Richly illustrated, filled with worked examples and over 400 exercises, some with detailed solutions, David MacKay's groundbreaking book is ideal for self-learning and for undergraduate or graduate courses. Interludes on crosswords, evolution, and sex provide entertainment along the way. In sum, this is a textbook on information, communication, and coding for a new generation of students, and an unparalleled entry point into these subjects for professionals in areas as diverse as computational biology, financial engineering, and machine learning.",
    amazonUrl: "https://a.co/d/45Or5bv",
  },
  {
    title: "Theoretical Neuroscience: Computational and Mathematical...",
    description: "Theoretical neuroscience provides a quantitative basis for describing what nervous systems do, determining how they function, and uncovering the general principles by which they operate. This text introduces the basic mathematical and computational methods of theoretical neuroscience and presents applications in a variety of areas including vision, sensory-motor integration, development, learning, and memory.The book is divided into three parts. Part I discusses the relationship between sensory stimuli and neural responses, focusing on the representation of information by the spiking activity of neurons. Part II discusses the modeling of neurons and neural circuits on the basis of cellular and synaptic biophysics. Part III analyzes the role of plasticity in development and learning. An appendix covers the mathematical methods used, and exercises are available on the book's Web site.",
    amazonUrl: "https://a.co/d/45DHHQX",
  },
  {
    title: "Understanding Deep Learning: From Neural Networks to...",
    description: "Dive into the core of deep learning and machine learning with this hands-on guide that provides a solid foundation for anyone from data scientists to AI enthusiasts. This book, meticulously structured for clarity and depth, unravels the mysteries of neural networks, large language models (LLMs), and generative AI. With clear explanations and a focus on practical applications, it’s your ultimate resource for mastering machine learning with Python.",
    amazonUrl: "https://a.co/d/axixPRF",
  },
  {
    title: "Mathematical modeling of the human brain: from magnetic resonance...",
    description: "This open access book bridges common tools in medical imaging and neuroscience with the numerical solution of brain modelling PDEs. The connection between these areas is established through the use of two existing tools, FreeSurfer and FEniCS, and one novel tool, the SVM-Tk, developed for this book. The reader will learn the basics of magnetic resonance imaging and quickly proceed to generating their first FEniCS brain meshes from T1-weighted images. The book's presentation concludes with the reader solving a simplified PDE model of gadobutrol diffusion in the brain that incorporates diffusion tensor images, of various resolution, and complex, multi-domain, variable-resolution FEniCS meshes with detailed markings of anatomical brain regions. After completing this book, the reader will have a solid foundation for performing patient-specific finite element simulations of biomechanical models of the human brain.",
    amazonUrl: "https://a.co/d/eJS7EaY",
  }
]

export function BookRecommendations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Books & Research Papers</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="double" collapsible className="w-full">
          {books.map((book, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{book.title}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>{book.description}</p>
                  <Button variant="outline" asChild>
                    <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      View on Amazon
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

