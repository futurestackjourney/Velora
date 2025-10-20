import HeadText from "../components/HeadText";
import { FEATURES } from "../constants/Index";
import Hero from "../sections/Hero";

const Features: React.FC = () => {
    return (
        <section className="py-16 md:py-24">
         <Hero/>
            <div className="mx-auto section-padding">
                <HeadText headText="Explore Key" primaryText="Features" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {FEATURES.map(({ icon: Icon, title, description }) => (
                        <div key={title} className="p-8 bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border shadow-sm">
                            <div className="flex items-center justify-center rounded-md mb-6 mx-auto">
                               <Icon className="w-14 h-14 text-cyan"/>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;