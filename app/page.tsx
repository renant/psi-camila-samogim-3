"use client";

import JsonLd from "@/components/JsonLd";
import FadeIn from "@/components/fade-in";
import Galery from "@/components/galery";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CalendarDays, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Nunito } from "next/font/google";
import Image from "next/image";
import logo from "../public/logo-cortado.png";

const nunito = Nunito({ weight: ["800", "900"], subsets: ["latin"] });
const nunitoItalic = Nunito({
  weight: ["800", "900"],
  style: "italic",
  subsets: ["latin"],
});

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <header className={`${nunito.className} bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50`}>
        <motion.div
          className="container mx-auto px-4 py-2 flex justify-between items-center"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="w-0 md:w-20 pt-2 md:left-10 md:top-2 md:visible invisible ">
            <Image
              width={100}
              src={logo}
              alt="Logo da Psicologa Camila Samogim"
            />
          </div>
          <div className="md:w-0 md:h-0 md:invisible visible">
            <Image
              width={100}
              src={logo}
              alt="Logo da Psicologa Camila Samogim"
            />
          </div>
          <nav>
            <ul className="flex space-x-4 ">
              <li>
                <a
                  href="#sobre"
                  className="text-purple-600 hover:text-purple-800"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#espaco"
                  className="text-purple-600 hover:text-purple-800"
                >
                  Espaço
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-purple-600 hover:text-purple-800"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-purple-600 hover:text-purple-800"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-8 ">
        <section id="sobre" className="mb-16 scroll-mt-24">
          <motion.h2
            className={`${nunito.className} text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            <motion.span
              className="block text-purple-900"
              variants={{
                hidden: { opacity: 0, x: -24 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
            >
              Eu sou Camila Samogim,
            </motion.span>
            <motion.span
              className="block text-purple-500"
              variants={{
                hidden: { opacity: 0, x: -24 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
            >
              Psicóloga Infantil,
            </motion.span>
            <motion.span
              className="block text-purple-900"
              variants={{
                hidden: { opacity: 0, x: -24 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
            >
              prazer!
            </motion.span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className=" order-2 md:order-1 prose">
              <FadeIn direction="up" delay={0.1}>
                <p className="mb-4 leading-relaxed text-lg text-gray-700">
                  Sou formada em Psicologia pelo Anchieta, em Jundiaí. Durante a
                  minha graduação, percebi minha paixão pelo trabalho com crianças
                  e decidi me especializar nessa área. Finalizei minha
                  Pós-Graduação em Análise do Comportamento aplicada ao Transtorno
                  do Espectro Autista e Deficiência pela CBI of Miami, com o
                  objetivo de aprimorar ainda mais meu conhecimento e habilidades
                  para ajudar todas as crianças em suas necessidades.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <blockquote className="mb-4 bg-white rounded-2xl border-l-4 border-purple-500 shadow-md px-6 py-5 italic text-gray-700 text-lg leading-relaxed">
                  &ldquo;Acredito que cada criança é única e merece ser tratada de
                  maneira individualizada, respeitando suas necessidades e
                  particularidades.&rdquo;
                </blockquote>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <p className="mb-4 leading-relaxed text-lg text-gray-700">
                  Por isso, meu trabalho é baseado em uma abordagem humanizada e
                  centrada na criança, buscando sempre compreender suas emoções e
                  pensamentos para poder ajudá-las da melhor forma possível.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <p className="mb-4 leading-relaxed text-lg text-gray-700">
                  Trabalho com crianças e adolescentes desde o início da minha
                  carreira, utilizando técnicas pela perspectiva da Análise do
                  Comportamento para ajudá-las a desenvolver habilidades sociais,
                  emocionais e cognitivas. Além disso, busco sempre orientar as
                  famílias e responsáveis sobre como lidar com as dificuldades
                  enfrentadas, e como ajudá-los a superá-las.
                </p>
              </FadeIn>
            </div>
            <motion.div
              className="order-1 md:order-2 flex justify-center rounded-lg"
              initial={{ opacity: 0, x: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="max-w-xs px-2.5 lg:max-w-md md:w-96">
                <video
                  autoPlay
                  muted
                  loop
                  className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                >
                  <source src="/video.mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="espaco" className="mb-16 scroll-mt-24">
          <FadeIn direction="up" className="text-center">
            <h2
              className={`${nunitoItalic.className} text-4xl md:text-5xl font-extrabold text-purple-800 mb-8`}
            >
              Confira de perto
              <br />
              meu espaço
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <Card className="rounded-2xl shadow-md border-0 bg-white/80 backdrop-blur-sm max-w-xl mx-auto mb-10">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Meu espaço foi pensado e planejado com muito carinho para
                  acolher todas as famílias!
                </p>
                <motion.div
                  className="space-y-5 mb-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.15 },
                    },
                  }}
                >
                  <motion.div
                    className="flex items-start gap-3"
                    variants={{
                      hidden: { opacity: 0, x: -24 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                    }}
                  >
                    <span className="text-xl mt-0.5" aria-hidden="true">
                      ⭐
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      O consultório fica localizado no Edifício Golden Office, na
                      cidade de Jundiaí/SP.
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    variants={{
                      hidden: { opacity: 0, x: -24 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                    }}
                  >
                    <span className="text-xl mt-0.5" aria-hidden="true">
                      🧩
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      A sala é equipada com materiais psicopedagógicos,
                      brinquedos, livros e diversos recursos.
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    variants={{
                      hidden: { opacity: 0, x: -24 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                    }}
                  >
                    <span className="text-xl mt-0.5" aria-hidden="true">
                      ☕
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      Recepção com cantinho do café para uma espera aconchegante.
                    </p>
                  </motion.div>
                </motion.div>
                <motion.p
                  className="text-purple-600 font-bold text-lg text-center leading-snug"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  Venha conhecer o espaço e tomar um café comigo!
                </motion.p>
              </CardContent>
            </Card>
          </FadeIn>
          <div className="max-w-2xl mx-auto">
            <Galery />
          </div>
        </section>

        <section id="faq" className="mb-16 max-w-2xl mx-auto scroll-mt-24">
          <FadeIn direction="left">
            <h2
              className={`${nunito.className} text-4xl md:text-5xl font-extrabold text-purple-800 mb-8`}
            >
              Perguntas
              <br />
              frequentes
            </h2>
          </FadeIn>
          <Accordion type="single" collapsible className="space-y-1">
            <FadeIn direction="up" delay={0}>
              <AccordionItem value="item-1">
              <AccordionTrigger>
                O que é Psicologia Infanto-Juvenil?
              </AccordionTrigger>
              <AccordionContent>
                A Psicologia Infanto-Juvenil estuda sobre emoções, cognição e
                comportamentos de crianças e adolescentes. Os Psicólogos
                utilizam técnicas e recursos lúdicos para promover bem-estar e
                desenvolvimento saudável para seus clientes.
              </AccordionContent>
              </AccordionItem>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <AccordionItem value="item-2">
              <AccordionTrigger>
                Por que a Psicologia Infanto-Juvenil é importante?
              </AccordionTrigger>
              <AccordionContent>
                A Psicologia Infanto-Juvenil é fundamental para que as crianças
                e adolescentes se desenvolvam de forma saudável, a fim de que,
                na vida adulta, sejam socialmente habilidosos e capazes de criar
                estratégias de resolução de problemas. Oferece suporte
                emocional, orientação e recursos para lidar com desafios.
                Melhora autoestima, habilidades sociais e desempenho acadêmico.
              </AccordionContent>
              </AccordionItem>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <AccordionItem value="item-3">
              <AccordionTrigger>
                Quanto tempo dura a terapia infanto-juvenil?
              </AccordionTrigger>
              <AccordionContent>
                O tempo da terapia infanto-juvenil varia conforme as
                necessidades de cada criança ou adolescente. O progresso é
                avaliado pelo psicólogo, assim como a alta terapêutica, sendo a
                mesma realizada de forma gradativa. As sessões são contínuas, e
                geralmente ocorrem uma vez por semana.
              </AccordionContent>
              </AccordionItem>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <AccordionItem value="item-4">
              <AccordionTrigger>
                Qual é a idade ideal para iniciar a terapia com crianças?
              </AccordionTrigger>
              <AccordionContent>
                Não há uma idade específica para iniciar a terapia com crianças,
                pois cada caso é único. A decisão de buscar ajuda profissional
                depende dos sintomas e dificuldades que a criança está
                enfrentando. Algumas crianças podem se beneficiar da terapia
                desde a primeira infância, enquanto outras podem iniciar mais
                tarde, quando começam a enfrentar desafios específicos.
                Lembrando que o processo de psicoeducação e orientação de pais é
                inerente à psicoterapia infantil, especialmente na primeira
                infância.
              </AccordionContent>
              </AccordionItem>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <AccordionItem value="item-5">
              <AccordionTrigger>
                Como a terapia pode ser adaptada às necessidades da criança?
              </AccordionTrigger>
              <AccordionContent>
                A terapia se adapta às necessidades da criança com abordagens e
                técnicas flexíveis. Cada criança é única e tem demandas
                próprias. O terapeuta avalia e ajusta as intervenções com base
                nas necessidades específicas, buscando um ambiente acolhedor e
                estimulante.
              </AccordionContent>
              </AccordionItem>
            </FadeIn>
            <FadeIn direction="up" delay={0.5}>
              <AccordionItem value="item-6">
              <AccordionTrigger>
                Os pais precisam estar envolvidos no processo terapêutico dos
                filhos?
              </AccordionTrigger>
              <AccordionContent>
                A participação dos pais na terapia é crucial, primeiramente pela
                coleta de dados, visto que a observação da família sobre os
                comportamentos da criança em ambiente natural, possibilitará uma
                análise e intervenções mais assertivas. Além disso, o processo
                de psicoeducação e orientação parental é essencial para que os
                pais possam dar continuidade às estratégias em casa,
                generalizando as evoluções da criança para todos os ambientes em
                que frequenta.
              </AccordionContent>
              </AccordionItem>
            </FadeIn>
          </Accordion>
        </section>

        <section id="contato" className="mb-16 max-w-xl mx-auto scroll-mt-24">
          <FadeIn direction="left">
            <h2
              className={`${nunito.className} text-4xl md:text-5xl font-extrabold text-purple-800 mb-8`}
            >
              Entre em contato
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <Card className="rounded-2xl shadow-md border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Estou aqui para ajudar você e sua família. Entre em contato para
                  agendar uma consulta ou tirar suas dúvidas.
                </p>
                <motion.a
                  href="https://api.whatsapp.com/send?phone=5511914175676"
                  className="w-full max-w-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white text-lg font-semibold h-14 rounded-full gap-3 shadow-lg shadow-purple-300/40">
                    <CalendarDays className="h-5 w-5" />
                    Agende uma consulta
                  </Button>
                </motion.a>
                <motion.div
                  className="flex items-center justify-center gap-6 mt-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                >
                  <motion.a
                    href="https://api.whatsapp.com/send?phone=5511914175676"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors"
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                    }}
                    whileHover={{ y: -3 }}
                  >
                    <Phone className="h-8 w-8" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/psicamilasamogim/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 transition-colors"
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                    }}
                    whileHover={{ y: -3 }}
                  >
                    <Instagram className="h-8 w-8" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/camila-samogim-740928163/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 transition-colors"
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                    }}
                    whileHover={{ y: -3 }}
                  >
                    <Linkedin className="h-8 w-8" />
                  </motion.a>
                  <motion.a
                    href="mailto:camila.samogim@hotmail.com?subject=Contato%20pelo%20site&body=Ol%C3%A1%2C%20Camila%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20marcar%20uma%20consulta"
                    className="text-red-400 hover:text-red-500 transition-colors"
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                    }}
                    whileHover={{ y: -3 }}
                  >
                    <Mail className="h-8 w-8" />
                  </motion.a>
                </motion.div>
              </CardContent>
            </Card>
          </FadeIn>
        </section>
      </main>

      <FadeIn>
        <footer className="bg-purple-800 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; 2024 Camila Samogim - Psicóloga Infantil. Todos os direitos
              reservados.
            </p>
          </div>
        </footer>
      </FadeIn>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "O que é Psicologia Infanto-Juvenil?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A Psicologia Infanto-Juvenil estuda sobre emoções, cognição e comportamentos de crianças e adolescentes. Os Psicólogos utilizam técnicas e recursos lúdicos para promover bem-estar e desenvolvimento saudável para seus clientes.",
              },
            },
            {
              "@type": "Question",
              name: "Por que a Psicologia Infanto-Juvenil é importante?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A Psicologia Infanto-Juvenil é fundamental para que as crianças e adolescentes se desenvolvam de forma saudável, a fim de que, na vida adulta, sejam socialmente habilidosos e capazes de criar estratégias de resolução de problemas. Oferece suporte emocional, orientação e recursos para lidar com desafios. Melhora autoestima, habilidades sociais e desempenho acadêmico.",
              },
            },
            {
              "@type": "Question",
              name: "Quanto tempo dura a terapia infanto-juvenil?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "O tempo da terapia infanto-juvenil varia conforme as necessidades de cada criança ou adolescente. O progresso é avaliado pelo psicólogo, assim como a alta terapêutica, sendo a mesma realizada de forma gradativa. As sessões são contínuas, e geralmente ocorrem uma vez por semana.",
              },
            },
            {
              "@type": "Question",
              name: "Qual é a idade ideal para iniciar a terapia com crianças?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não há uma idade específica para iniciar a terapia com crianças, pois cada caso é único. A decisão de buscar ajuda profissional depende dos sintomas e dificuldades que a criança está enfrentando. Algumas crianças podem se beneficiar da terapia desde a primeira infância, enquanto outras podem iniciar mais tarde, quando começam a enfrentar desafios específicos. Lembrando que o processo de psicoeducação e orientação de pais é inerente à psicoterapia infantil, especialmente na primeira infância.",
              },
            },
            {
              "@type": "Question",
              name: "Como a terapia pode ser adaptada às necessidades da criança?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A terapia se adapta às necessidades da criança com abordagens e técnicas flexíveis. Cada criança é única e tem demandas próprias. O terapeuta avalia e ajusta as intervenções com base nas necessidades específicas, buscando um ambiente acolhedor e estimulante.",
              },
            },
            {
              "@type": "Question",
              name: "Os pais precisam estar envolvidos no processo terapêutico dos filhos?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A participação dos pais na terapia é crucial, primeiramente pela coleta de dados, visto que a observação da família sobre os comportamentos da criança em ambiente natural, possibilitará uma análise e intervenções mais assertivas. Além disso, o processo de psicoeducação e orientação parental é essencial para que os pais possam dar continuidade às estratégias em casa, generalizando as evoluções da criança para todos os ambientes em que frequenta.",
              },
            },
          ],
        }}
      />
    </div>
  );
}
