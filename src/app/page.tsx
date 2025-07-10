
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Digitaliza tu negocio rápidamente con nuestra web lista y soporte sin pausa, incluso si no tienes experiencia." cta1="Transforma Tu Venta" />
<How step1Title="Descubre tu Potencial" step1Desc="Analizamos tu negocio y creamos un plan online." step2Title="Web en 24 Horas" step2Desc="Te entregamos una web de ventas rápidamente." step3Title="Soporte 24/7" step3Desc="Siempre listos para resolver cualquier duda." />
<Aboutus headline="WebGo: Ventas Digitales Sin Estrés" subheadline="Transformamos tu negocio en línea, sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Gestión Completa" beneficio1="Nos encargamos de todo." beneficiotitulo2="Ventas Aumentadas" beneficio2="Incrementamos tus ingresos online." />
<Services heading="Impulsa Tu Negocio al Mundo Digital" description="Implementamos ventas online sin complicaciones ni pérdida de tiempo." services={[{"name":"Web Express","icon":"rocket","description":"Tu web de ventas en menos de 24 horas."},{"name":"Soporte 24/7","icon":"support","description":"Asistencia continua para tu tranquilidad."},{"name":"SEO Optimizado","icon":"chart-line","description":"Aumenta la visibilidad con WebGo."},{"name":"Gestión Completa","icon":"tasks","description":"Nos encargamos de todo tu sitio web."},{"name":"Integraciones","icon":"plug","description":"Conecta con herramientas de marketing eficientemente."},{"name":"Análisis de Tráfico","icon":"analytics","description":"Entiende el comportamiento de tus clientes online."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en sitios web impactantes y funcionales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender en línea si solo vendo por recomendaciones?","respuesta":"WebGo te ayuda a llevar tu negocio al mundo digital mediante la creación de un sitio web efectivo que atrae clientes nuevos. Puedes llegar a más personas que buscan tus productos en línea y convertir esas visitas en ventas."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo me apoya WebGo?","respuesta":"WebGo se encarga de todo por ti. Diseñamos, implementamos y gestionamos tu sitio web, permitiéndote enfocarte en lo que haces mejor: tu negocio. Así, ahorras tiempo y esfuerzo mientras aumentan tus ventas en línea."},{"pregunta":"¿Es difícil aprender a usar un sitio web creado por WebGo?","respuesta":"No te preocupes, WebGo te ofrece un sitio web intuitivo y fácil de usar. Además, proporcionamos soporte para que te sientas seguro y puedas gestionar lo básico sin complicaciones."},{"pregunta":"¿Qué beneficios obtendré al digitalizar mis ventas con WebGo?","respuesta":"Digitalizar tus ventas con WebGo te permite llegar a un público más amplio, aumentar tus ingresos y construir una presencia de marca sólida en línea. Además, podrás recibir análisis sobre el comportamiento de tus clientes para mejorar tus estrategias de venta."},{"pregunta":"¿Cómo asegura WebGo que mi sitio web atraiga clientes?","respuesta":"WebGo utiliza técnicas de SEO avanzadas y diseño atractivo para garantizar que tu sitio web se destaque en los motores de búsqueda. Esto incrementa tu visibilidad y atrae más clientes potenciales interesados en tus productos o servicios."}]} />
<BookAppointment 
                      heading="Digitaliza tus Ventas y Crece" 
                      description="Deja de depender solo de recomendaciones. WebGo te ayuda a crear una presencia online efectiva para aumentar tus ventas rápidamente."
                      formPostUrl="api/contact-us"
                      projectId="26XCm9nfMHVoCW5nVTBFOB76dpC2"
                    />
<Footer />
    </main>
  );
}
