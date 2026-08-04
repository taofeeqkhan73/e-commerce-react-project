import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaSearch, FaExclamationCircle } from "react-icons/fa";

// NOTE: every product now stores `description` as an ARRAY of paragraphs.
// This fixes the "two headings / garbled text" bug that happened when a
// plain string was accessed with description[0] / description[1]
// (that returns individual CHARACTERS of the string, not paragraphs).
const products = {
  "category": {
    title: "Window Laptops",
    category: "Laptop",
    description: [
      "Then the question arises: where's the content? Not there yet? That's not so bad, there's dummy copy to the rescue. But worse, what if the fish doesn't fit in the can, the foot's to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons.",

      "A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't quite put a finger on it is worse. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required. It's content strategy gone awry right from the start. If that's what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader.",
    ],
  },

  "zebra-Printers": {
    title: "Zebra Printers",
    category: "Printer",
    description: [
      "Then the question arises: where's the content? Not there yet? That's not so bad, there's dummy copy to the rescue. But worse, what if the fish doesn't fit in the can, the foot's to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons.",

      "A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't quite put a finger on it is worse. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required. It's content strategy gone awry right from the start. If that's what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader.",
    ],
  },

  "workstation-Laptops": {
    title: "Workstation Laptops",
    category: "Laptop",
    description: [
      "Then the question arises: where’s the content? Not there yet? That’s not so bad, there’s dummy copy to the rescue. But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons.",
   
      "A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't quite put a finger on it is worse. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required. It's content strategy gone awry right from the start. If that's what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader.",
    ],
  },

  "window-Laptops": {
    title: "WiFi Routers",
    category: "Networking",
    description: [
      "Then the question arises: where’s the content? Not there yet? That’s not so bad, there’s dummy copy to the rescue. But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons.",
     
      "A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't quite put a finger on it is worse. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required. It's content strategy gone awry right from the start. If that's what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader.",
    ],
  },

  "wiFi-Routers": {
    title: "WiFi Range Extenders",
    category: "Networking",
    description: [
      "Then the question arises: where’s the content? Not there yet? That’s not so bad, there’s dummy copy to the rescue. But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons.",
     
      "A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't quite put a finger on it is worse. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required. It's content strategy gone awry right from the start. If that's what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader.",
    ],
  },

  "wiFi Range-Extenders": {
    title: "WiFi & Networking",
    category: "Networking",
    description: [
      "Then the question arises: where’s the content? Not there yet? That’s not so bad, there’s dummy copy to the rescue. But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons.",
     
      "A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't quite put a finger on it is worse. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required. It's content strategy gone awry right from the start. If that's what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader.",
    ],
  },

  "wiFi &-Networking": {
    title: "Webcams",
    category: "Camera",
    description: [
      "Then the question arises: where’s the content? Not there yet? That’s not so bad, there’s dummy copy to the rescue. But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons.",
     
      "A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't quite put a finger on it is worse. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required. It's content strategy gone awry right from the start. If that's what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader.",
    ],
  },

  "webcams": {
    title: "Visual Display",
    category: "Display",
    description: [
      "Then the question arises: where’s the content? Not there yet? That’s not so bad, there’s dummy copy to the rescue. But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons.",
     
      "A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't quite put a finger on it is worse. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required. It's content strategy gone awry right from the start. If that's what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader.",
    ],
  },

  "visual-Display": {
    title: 'Under 22" Monitors',
    category: "Monitor",
    description: [
      "Then the question arises: where’s the content? Not there yet? That’s not so bad, there’s dummy copy to the rescue. But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons.",
     
      "A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't quite put a finger on it is worse. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required. It's content strategy gone awry right from the start. If that's what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader.",
    ],
  },
};

export default function Product() {
  const { slug } = useParams();
  const [showMore, setShowMore] = useState(false);

  const product = products[slug];

  if (!product) {
    return (
      <h1 className="text-center text-4xl py-20">
        Product Not Found
      </h1>
    );
  }

  // some products only have ONE paragraph — guard against a missing [1]
  const hasSecondParagraph = product.description.length > 1;

  return (
    <section className="bg-[#f5f5f5] min-h-screen py-10">
      <div className="max-w-screen mx-auto px-5">

        <h1 className="text-5xl font-bold">
          {product.title}
        </h1>

        <div className="flex gap-2 mt-4 text-gray-500">
          <span>Home</span>
          <span>/</span>
          <span>Shop</span>
          <span>/</span>

          <span>{product.category}</span>
          <span>/</span>
          <span>Shop by Brand</span>
          <span>/</span>
          <span className="text-black font-semibold">
            {product.title}
          </span>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mt-10">

          <div>
            <div className="bg-white rounded-3xl p-6 shadow">
              <h2 className="text-2xl font-semibold">
                Stock Status
              </h2>

              <div className="space-y-4 mt-6">
                <label className="flex gap-3">
                  <input type="checkbox" />
                  On Sale
                </label>

                <label className="flex gap-3">
                  <input type="checkbox" />
                  In Stock
                </label>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">

            {/* Alert */}
            <div className="bg-red-600 rounded-xl px-6 py-4 text-white flex items-center gap-3">
              <FaExclamationCircle />
              No products were found matching your selection.
            </div>

            {/* Search */}
            <div className="relative mt-6">
              <input
                type="text"
                placeholder="Search Products"
                className="w-full h-14 rounded-full border border-gray-300 pl-6 pr-16 outline-none"
              />

              <button className="absolute right-6 top-1/2 -translate-y-1/2">
                <FaSearch />
              </button>
            </div>

            {/* Content */}
            <div className="mt-16">

              {/* Heading */}
              <h2 className="text-2xl font-semibold text-gray-800 slide-left">
                Online store of household appliances and electronics
              </h2>

              {/* First Paragraph */}
              <p className="mt-6 text-gray-600 leading-8 slide-left">
                {product.description[0]}
              </p>

              {/* Second Paragraph */}
              {hasSecondParagraph && (
                <p
                  className={`mt-10 text-gray-500 leading-8 ${showMore ? "slide-left" : "line-clamp-1"
                    }`}
                >
                  {product.description[1]}
                </p>
              )}

              {/* Button */}
              {hasSecondParagraph && (
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="mt-8 bg-white shadow px-8 py-4 rounded-full hover:bg-gray-200 hover:text-black transition-all duration-300"
                >
                  {showMore ? "Read Less" : "Read More"}
                </button>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}