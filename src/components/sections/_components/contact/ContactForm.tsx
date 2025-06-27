import React from 'react'

export const ContactForm = () => {
  return (
    <div className="code-block p-10">
      <h3 className="text-xl md:text-2xl font-bold text-primary-blue mb-4">
        <span className="text-gray-400">const</span> client ={' '}
        <span className="text-primary-blue">&#123;</span>
      </h3>
      <p className="text-gray-400 mb-10 text-lg">
        {'// Fill in your details to initiate connection'}
      </p>

      <form className="flex flex-col space-y-8">
        <div className="space-y-3">
          <label
            htmlFor="name"
            className="block text-gray-400 font-medium text-lg font-mono"
          >
            name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-background border border-border-color rounded-lg px-6 py-5 text-gray-300 focus:border-primary-blue focus:outline-none transition-colors text-lg font-mono"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-3">
          <label
            htmlFor="email"
            className="block text-gray-400 font-medium text-lg font-mono"
          >
            email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-background border border-border-color rounded-lg px-6 py-5 text-gray-300 focus:border-primary-blue focus:outline-none transition-colors text-lg font-mono"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="space-y-3">
          <label
            htmlFor="company"
            className="block text-gray-400 font-medium text-lg font-mono"
          >
            company: <span className="text-gray-500 text-base">(optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full bg-background border border-border-color rounded-lg px-6 py-5 text-gray-300 focus:border-primary-blue focus:outline-none transition-colors text-lg font-mono"
            placeholder="Your company"
          />
        </div>

        <div className="space-y-3">
          <label
            htmlFor="budget"
            className="block text-gray-400 font-medium text-lg font-mono"
          >
            budget: <span className="text-gray-500 text-base">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full bg-background border border-border-color rounded-lg px-6 py-5 text-gray-300 focus:border-primary-blue focus:outline-none transition-colors text-lg font-mono"
          >
            <option value="">Select budget range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000 - $15,000</option>
            <option value="15k-30k">$15,000 - $30,000</option>
            <option value="30k-plus">$30,000+</option>
          </select>
        </div>

        <div className="space-y-3">
          <label
            htmlFor="project"
            className="block text-gray-400 font-medium text-lg font-mono"
          >
            project:
          </label>
          <textarea
            id="project"
            name="project"
            rows={6}
            required
            className="w-full bg-background border border-border-color rounded-lg px-6 py-5 text-gray-300 focus:border-primary-blue focus:outline-none transition-colors resize-vertical text-lg font-mono"
            placeholder="Tell me about your project..."
          />
        </div>

        <div className="text-primary-blue text-xl md:text-2xl font-bold font-mono mb-4">
          <span className="text-primary-blue">&#125;;</span>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-blue text-background px-8 py-6 rounded-lg font-bold text-lg hover:bg-white hover:text-background transition-all duration-300 glow hover:shadow-lg hover:shadow-primary-blue/25 focus:outline-none focus:ring-4 focus:ring-primary-blue/30"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
