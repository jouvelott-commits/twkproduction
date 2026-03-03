import { motion } from "framer-motion";
import { Users, Eye } from "lucide-react";
import maxBellona from "@/assets/max-bellona.png";

const creators = [
  { name: "Olivier Allain", subscribers: "100K", views: "50K", avatar: "https://yt3.googleusercontent.com/9RyP8tWTKPkUJhEY8Nnxi-1rJUc8fui_tNAj69fcaCkGzPvrIUEcFJg-afVvlLBhOtCNI_YQDrw=s900-c-k-c0x00ffffff-no-rj" },
  { name: "Crisp", subscribers: "3K5", views: "150K", avatar: "https://cdn.jaimelesstartups.fr/wp-content/uploads/2019/08/Logo de la startup Crisp.png" },
  { name: "MS", subscribers: "2K5", views: null, avatar: "https://yt3.googleusercontent.com/aUTSdJ1WlSZC-4FbixdsYVNuV2AQgX1_nFd-iFwZLUEcrMhz2zjx2oUcHfLxQ8YXY-93_rMdfA=s900-c-k-c0x00ffffff-no-rj" },
  { name: "Micode (Underscore_)", subscribers: "1M", views: "7M20", avatar: "https://yt3.googleusercontent.com/W47ZNFjir6e_CRQ1Rz9RmooDHioBAFluOQXUx_v46fjwTkdB336fukbSh0x0Xj-aRjPLmx3i=s900-c-k-c0x00ffffff-no-rj" },
  { name: "Yomi Denzel", subscribers: "1M40K", views: "+10M", avatar: "https://images.prismic.io/littlebigthings/ZyyL-a8jQArT0b6P_YomiDenzel.jpg?auto=format,compress" },
  { name: "Max Bellona", subscribers: "480K", views: "5M", avatar: maxBellona },
  { name: "Felix Beauregard", subscribers: "90K", views: "680K", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVXj3bVUl5eko-c3aGJ4ynmubp6IU7lOCKiA&s" },
  { name: "Quentin Cougniot", subscribers: "220K", views: "50K", avatar: "https://media.licdn.com/dms/image/v2/D4E03AQHW0zV78zCFtg/profile-displayphoto-shrink_200_200/B4EZTMrfsAHcAY-/0/1738600742084?e=2147483647&v=beta&t=GrZxRIfydZI-EotRM1v16nDhzdAIlFgiSuBTI7A9J2w" },
  { name: "Sabrithai", subscribers: "150K", views: "500K", avatar: "https://yt3.googleusercontent.com/3McoY9zt3u5t7aoIN1xdaMl2FTDgiAfBjdlu2hbU3BWN0sm3hEwWyw8GCPL8jwBec0wxWbns51c=s900-c-k-c0x00ffffff-no-rj" },
  { name: "Bruno Maltor", subscribers: "800K", views: "500K", avatar: "https://www.travel-insight.fr/wp-content/uploads/2021/08/IMG_1905__1_-scaled.jpg" },
  { name: "Guizzi", subscribers: "1M60", views: "2M5", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGqIe0Kt06WkbJaNHIUyR-ABSQPi8OT32J9w&s" },
  { name: "Dali Dutilleul", subscribers: "500K", views: null, avatar: "https://yt3.googleusercontent.com/ZssbPIN74ctZuT6BU9LLkuGfxJF0ssmmdLV_lUtxs_LbJsqGsOT74Wg37w790V55J0jq_ObVvA=s900-c-k-c0x00ffffff-no-rj" },
  { name: "Yeux Ebenes", subscribers: "3M", views: "1M5K", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi_kE6wXGpR6q7SHPvvrvddDdGvl8AqB1roA&s" },
  { name: "Remax", subscribers: "30K", views: "500K", avatar: "https://yt3.googleusercontent.com/sj05SCyUhlFeErrLJhASYcjkrd4iFj81dnTlzJ39MVE2Zg5lJBQMROrXzTbCdoxTQHoaJ8bX5Q=s900-c-k-c0x00ffffff-no-rj" },
  { name: "Cosmy (agence UGC)", subscribers: null, views: null, avatar: "https://media.licdn.com/dms/image/v2/D4E0BAQEu4o9tevK8FQ/company-logo_200_200/company-logo_200_200/0/1685546463478/cosmy_ugc_logo?e=2147483647&v=beta&t=hVAtSOlUlr0P06OUMOEx_CpE_DYJG4WdUWUeKUjl5fE" },
  { name: "E2ouard", subscribers: "43K", views: "1M", avatar: "https://bonzai.b-cdn.net/images/IpRM1mQc6q4N99C2DEhIz0kflNtP8boa7vhFfoqT.png?width=400&height=400&aspect_ratio=1:1" },
];

const CreatorCard = ({ creator }: { creator: typeof creators[0] }) => (
  <div className="glass rounded-2xl p-6 text-center hover:border-primary/50 transition-colors min-w-[250px] md:min-w-[280px] flex-shrink-0">
    <img
      src={creator.avatar}
      alt={creator.name}
      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="font-semibold mb-3">{creator.name}</h3>
    <div className="space-y-2">
      {creator.subscribers && (
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4 text-primary" />
          <span>{creator.subscribers} abonnés</span>
        </div>
      )}
      {creator.views && (
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Eye className="w-4 h-4 text-primary" />
          <span>{creator.views} vues</span>
        </div>
      )}
    </div>
  </div>
);

const SocialProof = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ils nous ont fait <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des entrepreneurs et créateurs qui ont transformé leur présence en ligne
          </p>
        </motion.div>

        {/* Infinite marquee */}
        <div className="relative overflow-hidden group">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {creators.map((creator, index) => (
              <div key={`a-${index}`} className="px-3">
                <CreatorCard creator={creator} />
              </div>
            ))}
            {creators.map((creator, index) => (
              <div key={`b-${index}`} className="px-3">
                <CreatorCard creator={creator} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-black text-gradient mb-2">30+</div>
            <div className="text-muted-foreground">Créateurs accompagnés</div>
          </div>
          <div>
            <div className="text-4xl font-black text-gradient mb-2">1000+</div>
            <div className="text-muted-foreground">Vidéos produites</div>
          </div>
          <div>
            <div className="text-4xl font-black text-gradient mb-2">130M+</div>
            <div className="text-muted-foreground">Vues générées</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
