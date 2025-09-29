import { motion } from "motion/react";

export default function Badge({ caption }) {
  return <motion.span className="badge" animate={{scale: [1 , 1.2 , 1]}} transition={{duration: 2}}>{caption}</motion.span>; // for labels bumping
}
