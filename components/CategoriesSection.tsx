import * as motion from "motion/react-client";

export default function CategoriesSection() {
    return (
        <>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 ">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20}} 
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true}}
                    className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4  ">Explore Topics</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Dive into the subjects that spark curiosity and drive innovative in our digital world.</p>
                </motion.div>
            </div>
        </section>
        </>
    )
}