'use client'
import { motion } from "framer-motion";
import Link from "next/link";

const BreadcrumbContact = () => {
  return (
    <section className="tf__breadcrumb" style={{ backgroundImage: "url(" + "/images/breadcrumb_bg.jpg" + ")" }}>
      <div className="tf__breadcrumb_overlay">
        <div className="container">
          <div className="tf__breadcrumb_text">
            <motion.h1
              initial={{ opacity: 1, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >Contact Us</motion.h1>
            <motion.ul
              initial={{ opacity: 1, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <li><Link href="/">home</Link></li>
              <li><Link href="/contact">contact</Link></li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BreadcrumbContact;