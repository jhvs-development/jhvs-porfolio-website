export const ContactForm = () => {
  return (
    <div className="code-block glow hover:scale-105 transition-all duration-300 p-8">
      <h3 className="text-xl md:text-2xl font-bold mb-4 font-mono">
        <span className="text-primary-blue">const</span>{' '}
        <span className="text-white">client</span>{' '}
        <span className="text-primary-blue">=</span>{' '}
        <span className="text-primary-blue">&#123;</span>
      </h3>
      <p className="text-gray-400 mb-8 font-mono">
        {'// Fill in your details to initiate connection'}
      </p>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="block text-white font-medium font-mono"
          >
            <span className="text-white">name:</span>{' '}
            <span className="text-accent-green">&quot;string&quot;</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-background border border-border-color rounded-lg px-6 py-5 text-gray-300 focus:border-primary-blue focus:outline-none transition-colors font-mono"
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="block text-white font-medium font-mono"
          >
            <span className="text-white">email:</span>{' '}
            <span className="text-accent-green">&quot;string&quot;</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-background border border-border-color rounded-lg px-6 py-5 text-gray-300 focus:border-primary-blue focus:outline-none transition-colors font-mono"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="company"
            className="block text-white font-medium font-mono"
          >
            <span className="text-white">company:</span>{' '}
            <span className="text-accent-green">&quot;string | null&quot;</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full bg-background border border-border-color rounded-lg px-6 py-5 text-gray-300 focus:border-primary-blue focus:outline-none transition-colors font-mono"
            placeholder="Your company"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="budget"
            className="block text-white font-medium font-mono"
          >
            <span className="text-white">budget:</span>{' '}
            <span className="text-accent-green">&quot;string | null&quot;</span>
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full bg-background border border-border-color rounded-lg px-6 py-5 text-gray-300 focus:border-primary-blue focus:outline-none transition-colors font-mono"
          >
            <option value="">Select budget range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000 - $15,000</option>
            <option value="15k-30k">$15,000 - $30,000</option>
            <option value="30k-plus">$30,000+</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="project"
            className="block text-white font-medium font-mono"
          >
            <span className="text-white">project:</span>{' '}
            <span className="text-accent-green">&quot;string&quot;</span>
          </label>
          <textarea
            id="project"
            name="project"
            rows={6}
            required
            className="w-full bg-background border border-border-color rounded-lg px-6 py-5 text-gray-300 focus:border-primary-blue focus:outline-none transition-colors resize-vertical font-mono"
            placeholder="Tell me about your project..."
          />
          <div className="text-xl md:text-2xl font-bold font-mono">
            <span className="text-primary-blue">&#125;;</span>
          </div>
        </div>
        <button type="submit" className="btn normal-case">
          <span className="hover:text-white">await sendMessage();</span>
        </button>
      </form>
    </div>
  )
}
