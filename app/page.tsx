'use client'

import Galery from "@/components/galery"
import JsonLd from '@/components/JsonLd'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Linkedin, Mail, Phone } from "lucide-react"
import Image from 'next/image'
import logo from '../public/logo-cortado.png'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* <h1 className="text-3xl font-bold text-purple-700">Camila Samogim</h1> */}
          <div className='w-0 md:w-20 pt-2 md:left-10 md:top-2 md:visible invisible '>
            <Image width={100} src={logo} alt="Logo da Psicologa Camila Samogim" />
          </div>
          <div className="md:w-0 md:h-0 md:invisible visible">
            <Image width={100} src={logo} alt="Logo da Psicologa Camila Samogim" />
          </div>
          <nav>
            <ul className="flex space-x-4 ">
              <li><a href="#sobre" className="text-purple-600 hover:text-purple-800">Sobre</a></li>
              <li><a href="#espaco" className="text-purple-600 hover:text-purple-800">Espaço</a></li>
              <li><a href="#faq" className="text-purple-600 hover:text-purple-800">FAQ</a></li>
              <li><a href="#contato" className="text-purple-600 hover:text-purple-800">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 ">
        <section id="sobre" className="mb-16">
          <h2 className="text-4xl font-bold text-purple-800 mb-6 prose">Eu sou Camila Samogim, Psicóloga Infantil, prazer!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1 prose">
              <p className="mb-4">Sou formada em Psicologia pelo Anchieta, em Jundiaí. Durante a minha graduação, percebi minha paixão pelo trabalho com crianças e decidi me especializar nessa área. Finalizei minha Pós-Graduação em Análise do Comportamento aplicada ao Transtorno do Espectro Autista e Deficiência pela CBI of Miami, com o objetivo de aprimorar ainda mais meu conhecimento e habilidades para ajudar todas as crianças em suas necessidades.</p>
              <p className="mb-4">Acredito que cada criança é única e merece ser tratada de maneira individualizada, respeitando suas necessidades e particularidades. Por isso, meu trabalho é baseado em uma abordagem humanizada e centrada na criança, buscando sempre compreender suas emoções e pensamentos para poder ajudá-las da melhor forma possível.</p>
              <p>Trabalho com crianças e adolescentes desde o início da minha carreira, utilizando técnicas pela perspectiva da Análise do Comportamento para ajudá-las a desenvolver habilidades sociais, emocionais e cognitivas. Além disso, busco sempre orientar as famílias e responsáveis sobre como lidar com as dificuldades enfrentadas, e como ajudá-los a superá-las.</p>
            </div>
            <div className="order-1 md:order-2 flex items-center justify-center  rounded-lg">
              <div className="max-w-xs px-2.5 lg:max-w-md md:w-96">
                <video autoPlay muted loop className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'>
                  <source src="/video.mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section id="espaco" className="mb-16">
          <h2 className="text-4xl font-bold text-purple-800 mb-6 prose">Confira de perto meu espaço</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4 prose">Meu espaço foi pensado e planejado com muito carinho para acolher todas as famílias!</p>
                  <ul className="list-disc pl-6 mb-4 prose">
                    <li>O consultório fica localizado no Edifício Golden Office, na cidade de Jundiaí/SP.</li>
                    <li>A sala é equipada com materiais psicopedagogicos, brinquedos, livros, e diversos outros recursos que são utilizados em nossos atendimentos!</li>
                    <li>O espaço possui uma recepção com cantinho do café, para que as famílias possam esperar em um local aconchegante!</li>
                    <li>Também possuímos banheiro e uma pequena copa, utilizada também como recurso de algumas terapias!</li>
                  </ul>
                  <p className="font-semibold prose">Venha conhecer o espaço e tomar um café comigo!</p>
                </div>
                <div className="flex items-center justify-center bg-gray-200 rounded-lg ">
                  <Galery />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="text-4xl font-bold text-purple-800 mb-6 prose">Perguntas frequentes</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>O que é Psicologia Infanto-Juvenil?</AccordionTrigger>
              <AccordionContent>
                A Psicologia Infanto-Juvenil estuda sobre emoções, cognição e comportamentos de crianças e adolescentes. Os Psicólogos utilizam técnicas e recursos lúdicos para promover bem-estar e desenvolvimento saudável para seus clientes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Por que a Psicologia Infanto-Juvenil é importante?</AccordionTrigger>
              <AccordionContent>
                A Psicologia Infanto-Juvenil é fundamental para que as crianças e adolescentes se desenvolvam de forma saudável, a fim de que, na vida adulta, sejam socialmente habilidosos e capazes de criar estratégias de resolução de problemas. Oferece suporte emocional, orientação e recursos para lidar com desafios. Melhora autoestima, habilidades sociais e desempenho acadêmico.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Quanto tempo dura a terapia infanto-juvenil?</AccordionTrigger>
              <AccordionContent>
                O tempo da terapia infanto-juvenil varia conforme as necessidades de cada criança ou adolescente. O progresso é avaliado pelo psicólogo, assim como a alta terapêutica, sendo a mesma realizada de forma gradativa. As sessões são contínuas, e geralmente ocorrem uma vez por semana.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Qual é a idade ideal para iniciar a terapia com crianças?</AccordionTrigger>
              <AccordionContent>
                Não há uma idade específica para iniciar a terapia com crianças, pois cada caso é único. A decisão de buscar ajuda profissional depende dos sintomas e dificuldades que a criança está enfrentando. Algumas crianças podem se beneficiar da terapia desde a primeira infância, enquanto outras podem iniciar mais tarde, quando começam a enfrentar desafios específicos. Lembrando que o processo de psicoeducação e orientação de pais é inerente à psicoterapia infantil, especialmente na primeira infância.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Como a terapia pode ser adaptada às necessidades da criança?</AccordionTrigger>
              <AccordionContent>
                A terapia se adapta às necessidades da criança com abordagens e técnicas flexíveis. Cada criança é única e tem demandas próprias. O terapeuta avalia e ajusta as intervenções com base nas necessidades específicas, buscando um ambiente acolhedor e estimulante.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Os pais precisam estar envolvidos no processo terapêutico dos filhos?</AccordionTrigger>
              <AccordionContent>
                A participação dos pais na terapia é crucial, primeiramente pela coleta de dados, visto que a observação da família sobre os comportamentos da criança em ambiente natural, possibilitará uma análise e intervenções mais assertivas. Além disso, o processo de psicoeducação e orientação parental é essencial para que os pais possam dar continuidade às estratégias em casa, generalizando as evoluções da criança para todos os ambientes em que frequenta.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section id="contato" className="mb-16">
          <h2 className="text-4xl font-bold text-purple-800 mb-6 prose">Entre em contato</h2>
          <Card>
            <CardContent className="p-6 flex flex-col justify-center items-center">
              <p className="mb-4 ">Estou aqui para ajudar você e sua família. Entre em contato para agendar uma consulta ou tirar suas dúvidas.</p>
              <div className="flex flex-col justify-center">
                <a href="https://api.whatsapp.com/send?phone=5511914175676">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white h-10 md:w-96">Agende uma consulta</Button>
                </a>
                <div className="flex items-center justify-evenly mt-6">
                  <a href="https://api.whatsapp.com/send?phone=5511914175676" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                    <Phone className="h-6 w-6" />
                  </a>
                  <a href="https://www.instagram.com/psicamilasamogim/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/camila-samogim-740928163/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="mailto:camila.samogim@hotmail.com?subject=Contato%20pelo%20site&body=Ol%C3%A1%2C%20Camila%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20marcar%20uma%20consulta" className="text-red-600 hover:text-red-700">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Camila Samogim - Psicóloga Infantil. Todos os direitos reservados.</p>
        </div>
      </footer>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity":
          [
            {
              "@type": "Question",
              "name": "O que é Psicologia Infanto-Juvenil?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Psicologia Infanto-Juvenil estuda sobre emoções, cognição e comportamentos de crianças e adolescentes. Os Psicólogos utilizam técnicas e recursos lúdicos para promover bem-estar e desenvolvimento saudável para seus clientes."
              }
            },
            {
              "@type": "Question",
              "name": "Por que a Psicologia Infanto-Juvenil é importante?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Psicologia Infanto-Juvenil é fundamental para que as crianças e adolescentes se desenvolvam de forma saudável, a fim de que, na vida adulta, sejam socialmente habilidosos e capazes de criar estratégias de resolução de problemas. Oferece suporte emocional, orientação e recursos para lidar com desafios. Melhora autoestima, habilidades sociais e desempenho acadêmico."
              }
            },
            {
              "@type": "Question",
              "name": "Quanto tempo dura a terapia infanto-juvenil?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O tempo da terapia infanto-juvenil varia conforme as necessidades de cada criança ou adolescente. O progresso é avaliado pelo psicólogo, assim como a alta terapêutica, sendo a mesma realizada de forma gradativa. As sessões são contínuas, e geralmente ocorrem uma vez por semana."
              }
            },
            {
              "@type": "Question",
              "name": "Qual é a idade ideal para iniciar a terapia com crianças?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Não há uma idade específica para iniciar a terapia com crianças, pois cada caso é único. A decisão de buscar ajuda profissional depende dos sintomas e dificuldades que a criança está enfrentando. Algumas crianças podem se beneficiar da terapia desde a primeira infância, enquanto outras podem iniciar mais tarde, quando começam a enfrentar desafios específicos. Lembrando que o processo de psicoeducação e orientação de pais é inerente à psicoterapia infantil, especialmente na primeira infância."
              }
            },
            {
              "@type": "Question",
              "name": "Como a terapia pode ser adaptada às necessidades da criança?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A terapia se adapta às necessidades da criança com abordagens e técnicas flexíveis. Cada criança é única e tem demandas próprias. O terapeuta avalia e ajusta as intervenções com base nas necessidades específicas, buscando um ambiente acolhedor e estimulante."
              }
            },
            {
              "@type": "Question",
              "name": "Os pais precisam estar envolvidos no processo terapêutico dos filhos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A participação dos pais na terapia é crucial, primeiramente pela coleta de dados, visto que a observação da família sobre os comportamentos da criança em ambiente natural, possibilitará uma análise e intervenções mais assertivas. Além disso, o processo de psicoeducação e orientação parental é essencial para que os pais possam dar continuidade às estratégias em casa, generalizando as evoluções da criança para todos os ambientes em que frequenta."
              }
            }
          ]
      }} />
    </div>
  )
}