import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const videoTestimonials = [
  { id: "4eAuBurlbOw" },
  { id: "IHzgUZpqsXs" },
  { id: "po9hUMOZpTA" },
];

const testimonials = [
  {
    name: "Micode (Underscore_)",
    role: "Créateur YouTube - 1M abonnés",
    content: "Déjà, un immense bravo ! Franchement, pour une première vidéo avec nous, c'est bluffant. Le rendu est super abouti. En général, sur une première, je dois faire pas mal de retours de fond. Mais là, ce n'est pas du tout le cas ! Les ajustements que je propose sont majoritairement esthétiques, et j'ai même pris le luxe de pinailler comme je le fais avec nos monteurs les plus expérimentés. Bref, je suis vraiment très agréablement surpris. Beau travail",
    rating: 5,
    avatar: "https://yt3.googleusercontent.com/W47ZNFjir6e_CRQ1Rz9RmooDHioBAFluOQXUx_v46fjwTkdB336fukbSh0x0Xj-aRjPLmx3i=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Yomi Denzel",
    role: "Entrepreneur - 1M40K abonnés",
    content: "J'ai check tes extraits et franchement mec c'est du bon travail bravo",
    rating: 5,
    avatar: "https://images.prismic.io/littlebigthings/ZyyL-a8jQArT0b6P_YomiDenzel.jpg?auto=format,compress",
  },
  {
    name: "Crisp",
    role: "Startup SaaS",
    content: "Nous lui avons confié la gestion complète de notre chaîne : podcasts + formats courts. Il a su tenir un rythme de 60 réels par mois, tout en gérant efficacement le SEO. Fiable, organisé, et force de proposition",
    rating: 5,
    avatar: "https://cdn.jaimelesstartups.fr/wp-content/uploads/2019/08/Logo de la startup Crisp.png",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce qu'en disent nos <span className="text-gradient">clients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La satisfaction de nos clients en quelques mots
          </p>
        </motion.div>

        {/* Video Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {videoTestimonials.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={`Témoignage vidéo ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Text Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
