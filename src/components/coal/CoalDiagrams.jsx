import React from "react";

export function VonNeumannDiagram() {
  return (
    <figure className="coal-diagram" aria-label="Von Neumann architecture diagram">
      <svg viewBox="0 0 520 220" role="img" className="coal-diagram__svg">
        <rect x="200" y="20" width="120" height="56" rx="8" className="coal-diagram__box coal-diagram__box--cpu" />
        <text x="260" y="52" textAnchor="middle" className="coal-diagram__label">CPU</text>
        <text x="260" y="68" textAnchor="middle" className="coal-diagram__sublabel">Control + ALU</text>

        <rect x="200" y="140" width="120" height="56" rx="8" className="coal-diagram__box coal-diagram__box--mem" />
        <text x="260" y="172" textAnchor="middle" className="coal-diagram__label">Memory</text>
        <text x="260" y="188" textAnchor="middle" className="coal-diagram__sublabel">Program + Data</text>

        <rect x="20" y="80" width="100" height="48" rx="8" className="coal-diagram__box coal-diagram__box--io" />
        <text x="70" y="110" textAnchor="middle" className="coal-diagram__label">Input</text>

        <rect x="400" y="80" width="100" height="48" rx="8" className="coal-diagram__box coal-diagram__box--io" />
        <text x="450" y="110" textAnchor="middle" className="coal-diagram__label">Output</text>

        <line x1="260" y1="76" x2="260" y2="140" className="coal-diagram__arrow" markerEnd="url(#arrowhead)" />
        <line x1="200" y1="48" x2="120" y2="104" className="coal-diagram__line" />
        <line x1="320" y1="48" x2="400" y2="104" className="coal-diagram__line" />
        <line x1="120" y1="104" x2="200" y2="168" className="coal-diagram__line" />
        <line x1="400" y1="104" x2="320" y2="168" className="coal-diagram__line" />

        <text x="260" y="128" textAnchor="middle" className="coal-diagram__bus-label">Address / Data / Control Bus</text>

        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="coal-diagram__arrowhead" />
          </marker>
        </defs>
      </svg>
      <figcaption>Stored-program model: CPU and memory exchange instructions and data over a shared bus.</figcaption>
    </figure>
  );
}

export function SystemBusDiagram() {
  return (
    <figure className="coal-diagram" aria-label="System bus diagram">
      <svg viewBox="0 0 480 160" role="img" className="coal-diagram__svg">
        <rect x="180" y="56" width="120" height="48" rx="8" className="coal-diagram__box coal-diagram__box--bus" />
        <text x="240" y="86" textAnchor="middle" className="coal-diagram__label">System Bus</text>

        <rect x="20" y="20" width="90" height="40" rx="6" className="coal-diagram__box coal-diagram__box--cpu" />
        <text x="65" y="46" textAnchor="middle" className="coal-diagram__label">CPU</text>

        <rect x="20" y="100" width="90" height="40" rx="6" className="coal-diagram__box coal-diagram__box--mem" />
        <text x="65" y="126" textAnchor="middle" className="coal-diagram__label">RAM</text>

        <rect x="370" y="20" width="90" height="40" rx="6" className="coal-diagram__box coal-diagram__box--io" />
        <text x="415" y="46" textAnchor="middle" className="coal-diagram__label">Disk</text>

        <rect x="370" y="100" width="90" height="40" rx="6" className="coal-diagram__box coal-diagram__box--io" />
        <text x="415" y="126" textAnchor="middle" className="coal-diagram__label">I/O</text>

        <line x1="110" y1="40" x2="180" y2="72" className="coal-diagram__line" />
        <line x1="110" y1="120" x2="180" y2="88" className="coal-diagram__line" />
        <line x1="300" y1="72" x2="370" y2="40" className="coal-diagram__line" />
        <line x1="300" y1="88" x2="370" y2="120" className="coal-diagram__line" />
      </svg>
      <figcaption>One bus connects all major components — like a shared highway for bits.</figcaption>
    </figure>
  );
}

export function BinaryByteDiagram() {
  return (
    <figure className="coal-diagram" aria-label="Byte as 8 bits">
      <div className="coal-bit-row">
        {["1", "0", "1", "0", "1", "1", "0", "1"].map((bit, i) => (
          <div key={i} className={`coal-bit ${bit === "1" ? "coal-bit--on" : "coal-bit--off"}`}>
            <span className="coal-bit__value">{bit}</span>
            <span className="coal-bit__weight">{`2^${7 - i}`}</span>
          </div>
        ))}
      </div>
      <figcaption>One byte = 8 bits. Value shown: 10101101₂ = 173₁₀ = AD₁₆</figcaption>
    </figure>
  );
}

export function DecToBinDiagram() {
  return (
    <figure className="coal-diagram coal-diagram--steps" aria-label="Decimal to binary conversion">
      <ol className="coal-steps">
        <li>Start with decimal <strong>13</strong></li>
        <li>13 ÷ 2 = 6 remainder <strong>1</strong></li>
        <li>6 ÷ 2 = 3 remainder <strong>0</strong></li>
        <li>3 ÷ 2 = 1 remainder <strong>1</strong></li>
        <li>1 ÷ 2 = 0 remainder <strong>1</strong></li>
        <li>Read remainders upward → <strong>1101</strong>₂</li>
      </ol>
    </figure>
  );
}

export function IsaOverviewDiagram() {
  return (
    <figure className="coal-diagram coal-diagram--cards" aria-label="Instruction set categories">
      <div className="coal-isa-grid">
        {[
          { title: "Data Transfer", text: "Moves values between registers, memory, and I/O", accent: "transfer" },
          { title: "Arithmetic", text: "Adds, subtracts, multiplies, and divides operands", accent: "arithmetic" },
          { title: "Logic", text: "Applies bitwise operations such as AND and OR", accent: "logic" },
          { title: "Control", text: "Changes program flow with jumps and branches", accent: "control" },
        ].map((card) => (
          <div key={card.title} className={`coal-isa-card coal-isa-card--${card.accent}`}>
            <strong>{card.title}</strong>
            <span>{card.text}</span>
          </div>
        ))}
      </div>
      <figcaption>ISA instructions are grouped by purpose so the CPU has a clear vocabulary for each job.</figcaption>
    </figure>
  );
}

export function AddressingModesDiagram() {
  return (
    <figure className="coal-diagram coal-diagram--cards" aria-label="Addressing modes overview">
      <div className="coal-address-grid">
        {[
          { title: "Immediate", text: "Uses the literal value inside the instruction", code: "MOV AX, 5" },
          { title: "Register", text: "Uses an internal register as the source or target", code: "MOV AX, BX" },
          { title: "Direct", text: "Uses the exact memory address written in the instruction", code: "MOV AX, [1000]" },
          { title: "Indirect", text: "Uses a register that holds the memory address", code: "MOV AX, [BX]" },
        ].map((card) => (
          <div key={card.title} className="coal-address-card">
            <strong>{card.title}</strong>
            <span>{card.text}</span>
            <span style={{ marginTop: "0.35rem", color: "#c4b5fd" }}>{card.code}</span>
          </div>
        ))}
      </div>
      <figcaption>Each mode answers a different question: where is the operand, and how does the CPU find it?</figcaption>
    </figure>
  );
}

export function FlagsRegisterDiagram() {
  return (
    <figure className="coal-diagram coal-diagram--cards" aria-label="Flags register diagram">
      <div className="coal-flag-grid">
        {[
          { label: "ZF", text: "Zero Flag" },
          { label: "CF", text: "Carry Flag" },
          { label: "SF", text: "Sign Flag" },
          { label: "OF", text: "Overflow Flag" },
        ].map((flag, index) => (
          <div key={flag.label} className={`coal-flag-card ${index === 0 ? "coal-flag-card--active" : ""}`}>
            <strong>{flag.label}</strong>
            <span>{flag.text}</span>
          </div>
        ))}
      </div>
      <figcaption>Flags are status bits that report what happened after arithmetic or logic instructions run.</figcaption>
    </figure>
  );
}

const DIAGRAM_MAP = {
  "von-neumann": VonNeumannDiagram,
  "system-bus": SystemBusDiagram,
  "binary-byte": BinaryByteDiagram,
  "dec-to-bin": DecToBinDiagram,
  "isa-overview": IsaOverviewDiagram,
  "addressing-modes": AddressingModesDiagram,
  "flags-register": FlagsRegisterDiagram,
};

export function CoalDiagram({ type }) {
  const Component = DIAGRAM_MAP[type];
  if (!Component) return null;
  return <Component />;
}
