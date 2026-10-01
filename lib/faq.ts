/**
 * FAQ copy, verbatim from "Central Boone County Conveyance _ Website Content (1).pdf".
 * A block is either a paragraph, a paragraph with a bold lead-in label
 * ("Why that matters:"), or a bulleted list.
 */
export type FaqBlock =
  { p: string } | { label: string; p: string } | { list: string[] };

export type FaqItem = { q: string; a: FaqBlock[] };

export const faqs: FaqItem[] = [
  {
    q: "Did SD1 have to select B2 to address the sewer overflows?",
    a: [
      {
        p: "No. All three alternatives could address the existing overflow problem.",
      },
      {
        label: "So why B2?",
        p: "SD1 looked beyond simply solving today’s problem and considered which alternative would provide the greatest long-term benefit to the community.",
      },
      {
        p: "B2 uses more gravity, eliminates the Bullittsville Pump Station and reduces the need for additional pumping and storage facilities.",
      },
      {
        label: "What that means for residents:",
        p: "A system designed to cost less to operate over time, provide greater reliability and potentially serve more areas of Boone County through gravity.",
      },
    ],
  },
  {
    q: "Why is gravity sewer better for the community?",
    a: [
      {
        p: "Gravity can move wastewater more simply, reliably and efficiently.",
      },
      {
        p: "Gravity sewers use the natural elevation of the land to move wastewater. Pump stations require electricity, pumps, controls and other mechanical equipment that must be continually operated and maintained.",
      },
      {
        label: "Why that matters:",
        p: "Every pump station SD1 can avoid means less equipment customers ultimately have to pay to power, maintain, repair and replace.",
      },
      {
        p: "It also means less dependence on mechanical equipment and electrical systems that can experience failures or outages.",
      },
      {
        label: "The benefit:",
        p: "Lower long-term operating demands and greater reliability.",
      },
    ],
  },
  {
    q: "Why B2 instead of A3?",
    a: [
      {
        p: "Because A3 would leave the community with more infrastructure to operate and maintain.",
      },
      {
        p: "A3 would retain the Bullittsville and Taylorsport pumping system and require additional wastewater storage facilities at both locations.",
      },
      {
        p: "That means more pumps, electrical systems and mechanical equipment requiring ongoing operation, maintenance, repair and eventual replacement.",
      },
      {
        label: "B2 does more:",
        p: "It eliminates the Bullittsville Pump Station and avoids those additional facilities.",
      },
      {
        label: "The community benefit:",
        p: "Fewer facilities to pay for and maintain—and less reliance on mechanical equipment over the life of the system.",
      },
    ],
  },
  {
    q: "Why B2 instead of B3?",
    a: [
      {
        p: "B2 creates a lower-elevation gravity system that can potentially serve more of Boone County with less pumping infrastructure.",
      },
      {
        p: "B3 would upgrade and retain the Bullittsville Pump Station, add a new force main and require an above-ground wastewater storage tank before transitioning to gravity.",
      },
      {
        p: "B2 eliminates the Bullittsville Pump Station and establishes gravity sewer at a lower elevation.",
      },
      {
        label: "Why the elevation matters:",
        p: "The lower the gravity sewer sits within the watershed, the larger the area that can potentially drain to it naturally.",
      },
      {
        label: "The community benefit:",
        p: "Greater potential sewer coverage with less reliance on additional pump stations—helping reduce long-term costs and improve reliability.",
      },
    ],
  },
  {
    q: "Is B2 the least expensive option?",
    a: [
      {
        p: "SD1 looked at what the system will cost the community over its lifetime—not just what it costs to build today.",
      },
      {
        p: "Sewer infrastructure can serve a community for generations. Construction cost is only part of the total cost.",
      },
      {
        p: "Pump stations require electricity, inspections, maintenance, repairs and eventual equipment replacement year after year.",
      },
      {
        label: "Why B2:",
        p: "By eliminating the Bullittsville Pump Station and reducing the need for additional pumping and storage facilities, B2 reduces the amount of mechanical infrastructure SD1 must operate and maintain over time.",
      },
      {
        label: "The numbers:",
        p: "B2 is currently projected to cost approximately $39.5 million. Approximately $10.6 million in federal ARPA funding directed to the project by Boone County Fiscal Court reduces SD1’s net cost to below $30 million.",
      },
      {
        label: "The community benefit:",
        p: "A long-term investment designed to reduce ongoing operating and infrastructure costs for customers.",
      },
    ],
  },
  {
    q: "Will B2 provide sewer service to more areas of Boone County?",
    a: [
      {
        p: "B2 provides greater flexibility to potentially serve currently unserved areas through gravity as future needs arise.",
      },
      {
        p: "B2’s gravity sewer sits at a lower elevation than B3. That gives it greater hydraulic reach—meaning a larger surrounding area can potentially flow downhill to the sewer without additional pumping.",
      },
      {
        label: "Why that matters:",
        p: "Extending sewer service through gravity can help avoid repeatedly building individual pump stations as new community needs arise.",
      },
      {
        p: "Future connections would still require appropriate planning and infrastructure.",
      },
      {
        label: "The community benefit:",
        p: "Greater flexibility to serve more areas while reducing the need for additional pump stations and the long-term costs that come with them.",
      },
    ],
  },
  {
    q: "Does this project benefit more than one property or development?",
    a: [
      {
        p: "Yes. This is public infrastructure designed to provide broader benefits across Boone County.",
      },
      {
        label: "Fewer pump stations:",
        p: "B2 eliminates the Bullittsville Pump Station and avoids the additional pumping and equalization facilities the other alternatives would have required.",
      },
      {
        label: "More access to public sewer:",
        p: "B2’s lower elevation means a larger area can potentially reach the gravity sewer, giving currently unserved areas a path to public sewer service as future needs arise.",
      },
      {
        label: "Why that matters:",
        p: "Residents who gain access will have the option to connect to the public sewer system and discontinue use of private septic systems. Future connections would still require appropriate planning and infrastructure.",
      },
      {
        label: "The community benefit:",
        p: "Public sewer service available to more of Boone County, with less reliance on pump stations and the long-term costs that come with them.",
      },
    ],
  },
  {
    q: "Was economic development the reason B2 was selected?",
    a: [
      {
        p: "The decision was driven by wastewater infrastructure needs and the long-term needs of Boone County.",
      },
      {
        p: "Boone County previously identified limitations associated with the Bullittsville and Taylorsport pump stations, force mains and gravity sewers as its highest-priority sanitary sewer need.",
      },
      {
        p: "B2 addresses those infrastructure limitations while creating a lower-elevation gravity system that provides greater flexibility to serve currently unserved areas.",
      },
      {
        p: "Reliable sewer infrastructure can support a community’s economic vitality, but B2’s benefits are not limited to any individual property, development or developer.",
      },
      {
        label: "The community benefit:",
        p: "Infrastructure that can serve broader county needs while reducing reliance on additional pump stations.",
      },
    ],
  },
  {
    q: "Does B2 have greater construction and environmental impacts?",
    a: [
      {
        p: "Yes. B2 accepts greater construction complexity today in exchange for greater long-term community benefits.",
      },
      {
        p: "B2’s lower-elevation alignment presents greater construction, terrain, environmental and property/easement challenges.",
      },
      {
        p: "SD1 weighed those near-term impacts against what Boone County receives over the life of the system:",
      },
      {
        label: "Lower long-term costs:",
        p: "Fewer pumping and storage facilities to operate and maintain.",
      },
      {
        label: "Greater coverage:",
        p: "A lower-elevation gravity sewer that can potentially serve a larger area.",
      },
      {
        label: "Greater reliability:",
        p: "Less reliance on pumps, electrical systems and mechanical equipment.",
      },
      {
        p: "Required environmental permits have been obtained, and restoration and mitigation requirements are incorporated into the project’s design and construction.",
      },
      {
        label: "The tradeoff:",
        p: "Greater construction complexity now for a more efficient, reliable and flexible wastewater system for decades to come.",
      },
    ],
  },
  {
    q: "Why disturb land and stream areas for the project?",
    a: [
      {
        p: "Because the lower-elevation alignment is what gives B2 many of its long-term community benefits.",
      },
      {
        p: "Gravity sewer generally follows the natural elevation of the land. B2’s lower alignment allows wastewater from a larger area to potentially flow naturally to the system.",
      },
      {
        label: "Why that matters:",
        p: "The more wastewater that can reach the system through gravity, the less SD1 must rely on additional pump stations and mechanical infrastructure.",
      },
      { p: "That can mean:" },
      {
        list: [
          "Lower long-term operating and maintenance costs.",
          "Greater system reliability.",
          "Greater flexibility to provide sewer service to currently unserved areas.",
        ],
      },
      {
        p: "Where construction affects streams or regulated areas, SD1 must minimize impacts and complete required restoration and mitigation.",
      },
      {
        label: "The goal:",
        p: "Carefully manage temporary construction impacts while creating infrastructure that provides long-term benefits across Boone County.",
      },
    ],
  },
  {
    q: "What about impacts to private property?",
    a: [
      {
        p: "SD1 recognizes that the benefits of a public infrastructure project must be balanced against impacts to individual property owners.",
      },
      {
        p: "B2 requires easements on private property. Those impacts were carefully considered as part of SD1’s evaluation.",
      },
      {
        label: "What the broader community receives:",
        p: "B2 eliminates the Bullittsville Pump Station, reduces reliance on additional pumping and storage infrastructure and creates a lower-elevation gravity system capable of potentially serving a larger area.",
      },
      {
        p: "Necessary easements have been obtained through negotiation or the legal process, with property owners entitled to compensation as provided by law.",
      },
      {
        label: "The balance:",
        p: "SD1 determined that B2’s long-term benefits to the broader community—lower operating demands, greater reliability and greater potential sewer coverage—outweighed the impacts associated with constructing the project.",
      },
    ],
  },
];
