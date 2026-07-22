export const experienceConfig = {
  marquee: [
    "Content That Converts",
    "Performance Marketing",
    "Social Growth",
    "Paid Media",
    "Brand Storytelling",
    "Creative Direction",
    "Revenue Systems",
  ],
  story: [
    {
      chapter: "01",
      title: "We decode attention.",
      body: "Every scroll, view, and click is data. We map how your audience moves before we ever launch a campaign.",
    },
    {
      chapter: "02",
      title: "We craft the narrative.",
      body: "From reels to landing pages, every asset is designed to pull people deeper into your brand story.",
    },
    {
      chapter: "03",
      title: "We engineer growth.",
      body: "Paid media, funnels, and content systems working together — not in silos — to compound results.",
    },
  ],
  portfolio: [
    {
      slug: "nova-launch",
      client: "Nova Skincare",
      category: "Brand Launch",
      metric: "+312% ROAS",
      challenge: "Nova had a premium product line but zero brand awareness in the Indian D2C space. Competing against VC-funded incumbents with 10x their ad budget.",
      approach: "Built a cinematic brand film shot on RED cameras, engineered a 3-phase funnel (awareness → consideration → conversion), and launched a UGC creator seeding program across Instagram and YouTube.",
      results: ["+312% ROAS in 90 days", "1.2M organic impressions from launch film", "42% lower CAC vs. industry benchmark"],
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e039e967?w=1200&auto=format&fit=crop&q=80",
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      slug: "pulse-fitness",
      client: "Pulse Fitness",
      category: "Performance Ads",
      metric: "₹2.1Cr Revenue",
      challenge: "A fitness chain with 12 locations needed to drive membership sign-ups at scale while maintaining premium brand positioning in a price-war market.",
      approach: "Deployed hyper-local Meta ad campaigns with dynamic creative optimization, built a lead-to-trial-to-membership automated email nurture sequence, and produced weekly short-form content.",
      results: ["₹2.1Cr attributed revenue in 6 months", "5.2x blended ROAS", "3,400+ trial sign-ups from paid media"],
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&auto=format&fit=crop&q=80",
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      slug: "ember-hospitality",
      client: "Ember Hotels",
      category: "Social Content",
      metric: "48M Views",
      challenge: "Ember's luxury boutique hotels had stunning properties but invisible social presence. They needed to build an aspirational digital brand that drives direct bookings.",
      approach: "Shot a 5-day cinematic content sprint across 3 properties, producing 60+ assets. Engineered a scroll-stopping hook framework for Reels/Shorts and launched an influencer collaboration pipeline.",
      results: ["48M cumulative views in 4 months", "+280% Instagram following growth", "22% increase in direct website bookings"],
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop&q=80",
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
    {
      slug: "axis-fintech",
      client: "Axis Fintech",
      category: "Growth Systems",
      metric: "400% Lead Lift",
      challenge: "A B2B fintech platform struggled with a complex sales cycle and low lead quality from generic LinkedIn campaigns. Required a sophisticated multi-touch attribution system.",
      approach: "Designed a content-led ABM strategy with gated whitepapers, built a custom lead scoring CRM integration, and deployed retargeting sequences across Google and LinkedIn.",
      results: ["400% increase in qualified leads", "68% shorter sales cycle", "₹85L pipeline generated from content alone"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    },
    {
      slug: "velvet-fashion",
      client: "Velvet Co.",
      category: "Creative Direction",
      metric: "+180% CTR",
      challenge: "A fashion e-commerce brand was running ads with stock-style creative that blended into the feed. Click-through rates were below industry average and ROAS was declining.",
      approach: "Completely overhauled their creative strategy with motion-first ad formats, lifestyle-driven lookbook shoots, and A/B tested 30+ hook variations per campaign cycle.",
      results: ["+180% CTR improvement", "2.8x ROAS uplift within 60 days", "Brand recall score jumped from 12% to 38%"],
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80",
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    },
  ],
  reels: [
    {
      title: "Product Drop",
      views: "4.2M",
      gradient: "from-violet-500 via-fuchsia-500 to-orange-400",
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster:
        "https://images.unsplash.com/photo-1611162617474-5b21e039e967?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Founder Story",
      views: "2.8M",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      poster:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Campaign Cut",
      views: "6.1M",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      poster:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "UGC Series",
      views: "3.5M",
      gradient: "from-rose-500 via-red-500 to-amber-500",
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      poster:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=80",
    },
  ],
  metrics: [
    {
      label: "Revenue Generated",
      value: 4.5,
      prefix: "₹",
      suffix: "Cr+",
      span: "col-span-2 row-span-2",
    },
    {
      label: "Views Delivered",
      value: 120,
      suffix: "M+",
      span: "col-span-1 row-span-1",
    },
    {
      label: "Average ROAS",
      value: 400,
      suffix: "%",
      span: "col-span-1 row-span-1",
    },
    {
      label: "Brands Scaled",
      value: 100,
      suffix: "+",
      span: "col-span-1 row-span-1",
    },
    {
      label: "Campaigns Launched",
      value: 850,
      suffix: "+",
      span: "col-span-1 row-span-1",
    },
    {
      label: "Client Retention",
      value: 94,
      suffix: "%",
      span: "col-span-2 row-span-1",
    },
  ],
};
