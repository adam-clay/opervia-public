import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Products.scss';

interface Product {
  eyebrow: string;
  name: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

const products: Product[] = [
  {
    eyebrow: 'Smart Intake Form',
    name: 'Smart Service Request Form',
    description:
      'Custom-branded multi-step intake forms covering Service Packages, Multi-Year Agreements, Symptom Diagnosis, Work Order Segments, and required Parts. Embed on your existing site with full CSS control.',
    highlights: [
      'Multi-year agreements',
      'Symptom-driven diagnosis',
      'Work-order segments',
      'Site-embed CSS controls',
    ],
    image: '/images/product-service-form.png',
    imageAlt: 'Atlantic Tractor service request form running on a laptop',
  },
  {
    eyebrow: 'Web & Mobile Chat',
    name: 'Chat Agents',
    description:
      'AI chat agents deployed across every department, working together. Embedded directly into your dealership website and mobile-ready out of the box. Trained on your locations, inventory, and service capabilities.',
    highlights: [
      'Web + mobile native',
      'Trained on your inventory',
      'Routes to live staff seamlessly',
    ],
    image: '/images/product-chat-agents.png',
    imageAlt: 'Opervia chat agent embedded on a dealership website laptop and the same agent on a mobile phone',
  },
  {
    eyebrow: 'AI Photo & SMS',
    name: 'Smart Parts Texting',
    description:
      'Customers text a photo or part description; the AI identifies the part, checks availability across locations, applies pricing and discounts, and schedules pickup. Zero friction for the customer; clean parts orders for your team.',
    highlights: [
      'Photo-based part ID',
      'Multi-location availability',
      'Pricing & discount logic',
      'Pickup scheduling',
    ],
    image: '/images/parttexting.png',
    imageAlt: 'A customer in the field texts a photo of a tractor part; the AI replies with the part identified, price, and pickup details',
  },
];

const ProductRow = ({ product, index }: { product: Product; index: number }) => {
  const { ref, isInView } = useScrollAnimation();
  const reversed = index % 2 === 1;

  return (
    <div ref={ref} className={`product-row ${reversed ? 'product-row--reversed' : ''}`}>
      <motion.div
        className="product-image"
        initial={{ opacity: 0, x: reversed ? 60 : -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reversed ? 60 : -60 }}
        transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      >
        <img src={product.image} alt={product.imageAlt} loading="lazy" />
      </motion.div>

      <motion.div
        className="product-text"
        initial={{ opacity: 0, x: reversed ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reversed ? -60 : 60 }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      >
        <span className="product-eyebrow">{product.eyebrow}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <ul className="product-highlights">
          {product.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const Products = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation();

  return (
    <section id="products" className="products">
      <div className="products-container">
        <motion.div
          ref={titleRef}
          className="products-header"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <h2 className="products-title">
            Three Products. <span className="highlight">One Workflow.</span>
          </h2>
          <p className="products-subtitle">
            Built for how customers actually reach equipment dealerships today, and the realities of running a service department, parts counter, or sales floor.
          </p>
        </motion.div>

        <div className="products-list">
          {products.map((product, idx) => (
            <ProductRow key={product.name} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
