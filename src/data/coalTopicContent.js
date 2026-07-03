/**
 * Rich lesson content for COAL course modules.
 * Preview = short summary when accordion opens.
 * sections = full content revealed via "Explore full topic" button.
 */

const coalTopicContent = {
  "intro-computer-organization": {
    slug: "intro-computer-organization",
    level: "Beginner",
    duration: "3 days",
    preview: {
      summary:
        "Before writing assembly, you need a mental picture of how a computer is built and how software talks to hardware. This module introduces that picture in plain language.",
      highlights: [
        "Organization vs architecture vs ISA — three layers students often mix up",
        "The Von Neumann idea: program and data live in the same memory",
        "CPU, memory, I/O, and buses — what each part does in real machines",
      ],
    },
    sections: [
      {
        id: "what-is-coal",
        title: "What is COAL?",
        body: [
          "COAL stands for Computer Organization and Assembly Language. It sits between digital logic (gates and circuits) and high-level programming (Python, Java, C++).",
          "Organization explains how hardware is arranged. Assembly language is the human-readable form of machine instructions the CPU understands.",
        ],
        realLife: {
          title: "Real-life connection",
          text: "When you tap Like on a social app, your phone runs millions of machine instructions. COAL teaches you to read and write those instructions at the lowest practical level — like understanding how a car engine works before only driving automatic.",
        },
      },
      {
        id: "three-layers",
        title: "Organization vs Architecture vs ISA",
        body: [
          "These three terms appear in every COAL textbook. Think of them as zoom levels on the same machine.",
        ],
        table: {
          caption: "Three layers of a computer (simple view)",
          headers: ["Term", "What it means", "Everyday analogy"],
          rows: [
            [
              "Computer Organization",
              "How components are built and connected (ALU, buses, memory chips)",
              "How rooms and wiring are laid out in a house",
            ],
            [
              "Computer Architecture",
              "What the machine exposes to software (registers, instruction types)",
              "The floor plan a resident actually uses",
            ],
            [
              "ISA (Instruction Set)",
              "The exact vocabulary of instructions (MOV, ADD, JMP…)",
              "The language manual for that house's appliances",
            ],
          ],
        },
      },
      {
        id: "von-neumann",
        title: "The Von Neumann Model",
        body: [
          "Most computers today follow the Von Neumann stored-program model: both instructions and data are stored in memory. The CPU fetches instructions one after another and executes them.",
        ],
        diagram: "von-neumann",
        realLife: {
          title: "Real-life connection",
          text: "A recipe app stores recipes (data) and the steps to display them (instructions) in the same phone memory. The CPU reads each step, performs it, then moves to the next — exactly like executing a program.",
        },
      },
      {
        id: "main-components",
        title: "Main Hardware Components",
        body: ["Every desktop, laptop, and microcontroller contains the same core building blocks."],
        table: {
          caption: "Core components and their jobs",
          headers: ["Component", "Job", "Real-world example"],
          rows: [
            ["CPU", "Executes instructions, performs arithmetic and logic", "The chef in a kitchen"],
            ["Memory (RAM)", "Stores programs and data while power is on", "The countertop workspace"],
            ["I/O devices", "Keyboard, screen, disk, network — talk to the outside world", "Waiters bringing orders in and plates out"],
            ["System bus", "Shared wires moving addresses, data, and control signals", "The hallway connecting kitchen, pantry, and dining room"],
          ],
        },
        diagram: "system-bus",
      },
      {
        id: "why-assembly",
        title: "Why Learn Assembly?",
        body: [
          "High-level languages hide hardware details. Assembly removes that hiding — useful for debugging, embedded systems, security research, and understanding performance.",
        ],
        table: {
          caption: "Where COAL knowledge helps",
          headers: ["Field", "Why assembly matters"],
          rows: [
            ["Embedded / IoT", "Microcontrollers often have no Python runtime — you write assembly or C close to metal"],
            ["Cybersecurity", "Exploits target memory layout, stack, and CPU flags"],
            ["Game / graphics engines", "Hot loops are tuned knowing cache and registers"],
            ["Compilers", "Understanding how `if` and `for` become jumps and compares"],
          ],
        },
      },
    ],
    keyTakeaways: [
      "Organization = hardware structure; Architecture = programmer's view; ISA = instruction vocabulary.",
      "Von Neumann machines store programs and data in the same memory.",
      "CPU + memory + I/O + bus is the mental model for every module that follows.",
    ],
  },

  "instruction-set-architecture": {
    slug: "instruction-set-architecture",
    level: "Beginner",
    duration: "3 days",
    preview: {
      summary:
        "The ISA is the CPU's instruction vocabulary. This topic shows how instructions are grouped, why they matter, and how software talks to hardware through clear command patterns.",
      highlights: [
        "Instruction categories: data transfer, arithmetic, logic, and control",
        "How ISA acts as the hardware-software contract",
        "Why assembly instructions are more than just syntax",
      ],
    },
    sections: [
      {
        id: "isa-definition",
        title: "Instruction Set Architecture (ISA)",
        body: [
          "Think of the ISA as the vocabulary or contract between hardware and software. It defines exactly what commands the processor can understand and execute.",
          { type: "subheading", text: "Instruction categories" },
          {
            type: "list",
            items: [
              "Data Transfer: moves data from one place to another without changing the value itself.",
              "Arithmetic: performs operations such as ADD, SUB, MUL, and DIV.",
              "Logic: performs bitwise operations such as AND, OR, XOR, and NOT.",
              "Control: changes the flow of execution using jumps and branches.",
            ],
          },
          "A simple example is MOV AX, BX, which copies data from one register to another. The instruction itself tells the CPU both the operation and the operands.",
        ],
        diagram: "isa-overview",
        realLife: {
          title: "Real-life connection",
          text: "An ISA is like the language rules of a kitchen. If the cook knows the allowed commands, the kitchen can follow a recipe precisely. Without that shared vocabulary, software and hardware cannot cooperate.",
        },
      },
      {
        id: "isa-importance",
        title: "Why this matters in COAL",
        body: [
          "Assembly is not just memorizing mnemonics. It is learning how the CPU interprets instructions at the machine level, one command at a time.",
          "When you understand the ISA, you can read a small program and predict what the processor will do before you even run it.",
        ],
        table: {
          caption: "Instruction categories at a glance",
          headers: ["Category", "Goal", "Example"],
          rows: [
            ["Data transfer", "Move data between registers, memory, and I/O", "MOV AX, BX"],
            ["Arithmetic", "Perform math", "ADD AX, 5"],
            ["Logic", "Manipulate bits", "AND AX, 0x0F"],
            ["Control", "Change program flow", "JE target"],
          ],
        },
      },
    ],
    keyTakeaways: [
      "The ISA is the CPU's instruction vocabulary.",
      "Instructions are grouped by purpose: data movement, arithmetic, logic, and control.",
      "Learning the ISA helps you read and reason about assembly programs more clearly.",
    ],
  },

  "addressing-modes": {
    slug: "addressing-modes",
    level: "Beginner",
    duration: "4 days",
    preview: {
      summary:
        "Addressing modes tell the CPU where to find the operands for an instruction. This topic explains the four foundational modes and shows how they change the way a processor accesses data.",
      highlights: [
        "Immediate, register, direct, and indirect modes",
        "How the operand location changes execution behavior",
        "Why memory access depends on the addressing mode",
      ],
    },
    sections: [
      {
        id: "addressing-overview",
        title: "Addressing Modes",
        body: [
          "If an instruction tells the CPU what to do, the addressing mode tells the CPU where the data is located. In other words, the mode defines how the operand is found.",
          { type: "subheading", text: "The four fundamental modes" },
          {
            type: "list",
            items: [
              "Immediate addressing: the data is written directly into the instruction.",
              "Register addressing: the data already lives in a register.",
              "Direct addressing: the instruction contains the exact memory address.",
              "Indirect addressing: a register holds the address, and the CPU follows it.",
            ],
          },
        ],
        diagram: "addressing-modes",
        realLife: {
          title: "Real-life connection",
          text: "A delivery driver can pick up a package either by reading a label directly, using a known address, or following a note that points to another location. Addressing modes work the same way for the CPU.",
        },
      },
      {
        id: "addressing-examples",
        title: "How each mode looks in assembly",
        body: [
          "Immediate addressing is fast to read because the value is embedded in the instruction itself.",
          "Register addressing is usually the fastest because the CPU works with its own internal storage.",
          "Direct and indirect addressing are more memory-focused because the processor must go to RAM to fetch the operand.",
        ],
        table: {
          caption: "Common addressing modes and examples",
          headers: ["Mode", "Meaning", "Example"],
          rows: [
            ["Immediate", "Use the literal value in the instruction", "MOV AX, 5"],
            ["Register", "Use a register as the source or destination", "MOV AX, BX"],
            ["Direct", "Use the memory address written in the instruction", "MOV AX, [1000]"],
            ["Indirect", "Use the address stored in a register", "MOV AX, [BX]"],
          ],
        },
      },
    ],
    keyTakeaways: [
      "Addressing modes describe where operands are found.",
      "Immediate and register modes are direct; direct and indirect modes involve memory.",
      "Choosing the correct mode is essential for reading and writing efficient assembly code.",
    ],
  },

  "flags-and-status": {
    slug: "flags-and-status",
    level: "Beginner",
    duration: "3 days",
    preview: {
      summary:
        "The flags register is a compact status dashboard for the CPU. After arithmetic and logic instructions, it reports whether the result was zero, negative, carried, or overflowed.",
      highlights: [
        "ZF, CF, SF, and OF explain the result of an operation",
        "Flags are used for comparisons and conditional branches",
        "The flags register is one of the most important ideas in assembly logic",
      ],
    },
    sections: [
      {
        id: "flags-intro",
        title: "Flags Register & Comparisons",
        body: [
          "When the CPU performs an arithmetic or logic operation, it needs a way to report the status of the result. It does this using the flags register, which is basically a dashboard of bits.",
          "Each flag turns on or off depending on what happened in the last operation.",
          { type: "subheading", text: "Common flags" },
          {
            type: "list",
            items: [
              "ZF (Zero Flag): set when the result is exactly zero.",
              "CF (Carry Flag): set when an unsigned carry or borrow occurs.",
              "SF (Sign Flag): set when the result is negative.",
              "OF (Overflow Flag): set when signed overflow occurs.",
            ],
          },
        ],
        diagram: "flags-register",
        component: "alu-flags-simulator",
        realLife: {
          title: "Real-life connection",
          text: "A dashboard in a car does not show every detail of the engine, but it shows the important signals: fuel level, temperature, and warnings. The flags register does the same job for the CPU.",
        },
      },
      {
        id: "flags-usage",
        title: "Why flags matter for branches",
        body: [
          "Flags are especially important in comparisons. After a compare or subtraction, the CPU can decide whether to jump, stop, or continue based on the flag values.",
          { type: "code", code: "CMP AX, BX\nJE equal_label\nJNE continue" },
          "This pattern is one of the most common ways assembly programs make decisions.",
        ],
        table: {
          caption: "What each flag tells you",
          headers: ["Flag", "Meaning", "Typical use"],
          rows: [
            ["ZF", "Result was zero", "Check equality"],
            ["CF", "Carry or borrow happened", "Unsigned arithmetic checks"],
            ["SF", "Result is negative", "Signed comparisons"],
            ["OF", "Signed overflow occurred", "Detect overflow in signed math"],
          ],
        },
      },
    ],
    keyTakeaways: [
      "The flags register reports status after arithmetic and logic operations.",
      "ZF, CF, SF, and OF are the most common condition flags.",
      "Flags are the bridge between computation and conditional branching in assembly.",
    ],
  },

  "procedures-stack": {
    slug: "procedures-stack",
    level: "Intermediate",
    duration: "3 days",
    preview: {
      summary:
        "Moving from the theoretical concepts of Part 3 into Part 4 means you are finally writing the core logic of your programs. This lesson connects the ideas of registers, memory, and the runtime stack to the way assembly programs actually execute functions and data movement.",
      highlights: [
        "Registers and memory are the CPU's working containers",
        "MOV, PUSH, and POP show how data moves through the machine",
        "The stack is a LIFO structure that supports procedures and temporary storage",
      ],
    },
    sections: [
      {
        id: "assembly-programming-intro",
        title: "Assembly Programming: From Concepts to Core Logic",
        body: [
          "Moving from the theoretical concepts of Part 3 into Part 4 means you are finally writing the core logic of your programs. Since you are already used to building out functions and logic flow in modern environments like JavaScript and Node.js, thinking of Assembly in those terms can make it much easier to digest.",
          "In higher-level languages, the compiler handles memory mapping and call stacks for you. In Assembly, you are the compiler. Here is the beginner-friendly breakdown of how these concepts map to the hardware.",
          { type: "subheading", text: "1. Registers, Memory & Operand Rules" },
          "Before moving data, you need to know what containers you have. Registers are the CPU's ultra-fast internal variables. In the x86 architecture, registers are sliceable, meaning you can access parts of a 32-bit register if you only need 16 or 8 bits of data.",
          {
            type: "list",
            items: [
              "32-bit registers (Extended): EAX, EBX, ECX, EDX.",
              "16-bit registers (Base): AX, BX, CX, DX (These are just the lower halves of the 'E' registers).",
              "8-bit registers (High/Low): AX is split into AH and AL.",
            ],
          },
          { type: "subheading", text: "2. Data Movement & Basic Instructions" },
          "This is how you assign values to your hardware variables.",
          {
            type: "list",
            items: [
              "MOV (Move): The assignment operator. MOV AX, 5 puts 5 into AX.",
              "LEA (Load Effective Address): Gets the address of a memory location rather than the value stored there.",
              "XCHG (Exchange): Swaps the values of two registers instantly.",
            ],
          },
          { type: "subheading", text: "3. Control Flow: Branches & Loops" },
          "Assembly does not have if, else, or while blocks. Instead, you compare two values and then jump to a different memory address based on the result.",
          {
            type: "list",
            items: [
              "CMP (Compare): Subtracts the second operand from the first to set status flags.",
              "Conditional jumps: JE, JNE, JG route execution to a label in your code.",
              "LOOP: Automatically decrements CX and jumps while CX is not zero.",
            ],
          },
          { type: "subheading", text: "4. Procedures, Stack & Subroutines" },
          "When you write a function, the CPU needs to remember where it was before jumping into that function and store temporary local values. It uses the stack, a LIFO memory structure.",
          {
            type: "list",
            items: [
              "PUSH: Places a value onto the top of the stack.",
              "POP: Removes the top value and places it into a register.",
              "CALL: Pushes the return address and jumps to a procedure.",
              "RET: Pops the return address and resumes the caller.",
            ],
          },
          { type: "subheading", text: "5. Arrays, Strings & Advanced Instructions" },
          "Arrays in assembly are contiguous blocks of memory. To traverse them, you use indexed addressing, where the base address is combined with an index to find each element.",
        ],
        component: "assembly-stack-simulator",
        realLife: {
          title: "Real-life connection",
          text: "Think of the stack like a tray stack in a kitchen: the last plate placed on top is the first one taken off. The CPU uses the same idea to manage temporary work and function calls.",
        },
      },
    ],
    keyTakeaways: [
      "Assembly programs combine registers, memory, and branch logic to express real computation.",
      "MOV, PUSH, and POP are simple but powerful building blocks for understanding execution flow.",
      "The stack is a core concept for procedures, recursion, and temporary state.",
    ],
  },

  "coal-syntax": {
    slug: "coal-syntax",
    level: "Intermediate",
    duration: "3 days",
    preview: {
      summary:
        "Assembly programs begin with data movement and the basic arithmetic and logic instructions that make every computation possible. This lesson shows how MOV, ADD, SUB, and related instructions translate the ideas of variables and operations into processor actions.",
      highlights: [
        "MOV copies values between registers and memory",
        "Arithmetic and logic instructions operate directly on CPU registers",
        "Instruction syntax becomes easier when you think in terms of data flow",
      ],
    },
    sections: [
      {
        id: "basic-instructions",
        title: "Data Movement & Basic Instructions",
        body: [
          "At the beginning of an assembly program, you are usually moving data into the right place and preparing it for computation. This is why instructions such as MOV, LEA, and XCHG are foundational.",
          "A MOV instruction is the closest thing to assignment in a high-level language. It copies a value from one operand to another, while LEA gives you the address of a location instead of its contents. XCHG lets you swap values without a temporary variable.",
          { type: "subheading", text: "Core instruction families" },
          {
            type: "list",
            items: [
              "MOV: copy data from one location to another",
              "LEA: load an effective address for pointer-like work",
              "XCHG: swap two values directly",
              "ADD, SUB, INC, DEC: perform arithmetic on registers or memory",
              "AND, OR, XOR, NOT: apply bitwise logic",
            ],
          },
          "In practice, an assembly programmer thinks about the CPU as a set of working containers. The instruction tells the hardware which container should receive which value.",
        ],
        code: {
          code: "MOV AX, 5\nMOV BX, 10\nADD AX, BX",
        },
        table: {
          caption: "Common basic instructions",
          headers: ["Instruction", "Purpose", "Typical use"],
          rows: [
            ["MOV", "Copy data", "Assign a value to a register"],
            ["ADD", "Add numbers", "Accumulate totals"],
            ["SUB", "Subtract", "Compute differences"],
            ["AND", "Bitwise AND", "Mask bits"],
            ["OR", "Bitwise OR", "Set bits"],
          ],
        },
      },
    ],
    keyTakeaways: [
      "Basic instructions define how data enters, leaves, and changes inside the CPU.",
      "MOV is the assembly equivalent of assignment.",
      "Arithmetic and logic instructions turn stored values into meaningful results.",
    ],
  },

  "control-flow": {
    slug: "control-flow",
    level: "Intermediate",
    duration: "3 days",
    preview: {
      summary:
        "Once you can move and compute values, the next step is deciding what should happen next. Assembly uses comparisons and jumps to implement decisions, branches, and loops in a very explicit way.",
      highlights: [
        "CMP sets the condition flags for decisions",
        "Conditional jumps route execution to labels",
        "Loops are built with counters and repeated jumps",
      ],
    },
    sections: [
      {
        id: "branches-and-loops",
        title: "Control Flow: Branches & Loops",
        body: [
          "High-level languages provide if, else, while, and for blocks. Assembly provides a lower-level mechanism: compare values, inspect the flags, and jump to a target instruction.",
          "The compare instruction is crucial because it does not store a result in the same way as ADD or SUB. Instead, it updates the flags so the CPU can make a branch decision.",
          { type: "subheading", text: "Jumping with intent" },
          {
            type: "list",
            items: [
              "JE / JNE: jump when values are equal or not equal",
              "JG / JL: jump based on signed greater-than or less-than comparisons",
              "JMP: unconditionally branch to a new label",
              "LOOP: decrement CX and repeat while it is not zero",
            ],
          },
          "This style of programming is more explicit than modern languages, but it is also very powerful because it teaches you how control structures are implemented at the machine level.",
        ],
        code: {
          code: "CMP AX, BX\nJE equal_label\nJNE continue",
        },
        table: {
          caption: "Common branch patterns",
          headers: ["Instruction", "Meaning", "Typical use"],
          rows: [
            ["JMP", "Unconditional jump", "Skip to another block"],
            ["JE", "Jump if equal", "Check equality"],
            ["JNE", "Jump if not equal", "Handle mismatch"],
            ["JG", "Jump if greater", "Signed greater-than logic"],
          ],
        },
      },
    ],
    keyTakeaways: [
      "Assembly control flow is built from comparisons and jumps.",
      "Branches are explicit, predictable, and closely tied to the flags register.",
      "Loops are implemented with counters and conditional jumps.",
    ],
  },

  "registers-memory": {
    slug: "registers-memory",
    level: "Intermediate",
    duration: "3 days",
    preview: {
      summary:
        "Registers and memory are the two main places where assembly programs store and manipulate data. Understanding the difference between them is essential for writing correct code and choosing the right operands.",
      highlights: [
        "x86 registers come in 8-bit, 16-bit, and 32-bit views",
        "Operand sizes matter for correctness",
        "Memory addressing requires careful interpretation of effective addresses",
      ],
    },
    sections: [
      {
        id: "registers-and-memory",
        title: "Registers, Memory & Operand Rules",
        body: [
          "Assembly is strict about operand sizes. A register may be viewed as AX, EAX, or AL depending on the context, and the instruction must match the size of the data you expect to move or compute.",
          "The CPU has a small set of ultra-fast internal registers for active work, while memory holds larger amounts of data and instructions. When an instruction uses memory, it needs an address, and that address can be immediate, register-based, or computed with an index.",
          { type: "subheading", text: "Register views and sizing" },
          {
            type: "list",
            items: [
              "AX, BX, CX, DX are the 16-bit base registers",
              "EAX, EBX, ECX, EDX are the 32-bit extended versions",
              "AH, AL, BH, BL are the high and low 8-bit parts of the 16-bit registers",
              "BYTE, WORD, and DWORD tell the assembler how to interpret the operand size",
            ],
          },
          "Incorrect operand sizes are one of the most common beginner mistakes in assembly, because the CPU cannot silently reinterpret data in a way that would make the instruction meaningful.",
        ],
        code: {
          code: "MOV EAX, [EBX]\nADD EAX, 4",
        },
        table: {
          caption: "Register size views",
          headers: ["Register", "16-bit view", "32-bit view", "8-bit parts"],
          rows: [
            ["Accumulator", "AX", "EAX", "AH / AL"],
            ["Base", "BX", "EBX", "BH / BL"],
            ["Counter", "CX", "ECX", "CH / CL"],
          ],
        },
      },
    ],
    keyTakeaways: [
      "Registers are fast working space; memory is larger but slower storage.",
      "Operand size must be consistent with the instruction and data type.",
      "Addressing modes determine how the CPU finds the right memory location.",
    ],
  },

  "arrays-strings": {
    slug: "arrays-strings",
    level: "Intermediate",
    duration: "3 days",
    preview: {
      summary:
        "Real programs often work with collections of values and character data. Assembly handles these through indexed addressing, memory layout, and string-oriented instructions that operate on contiguous blocks of data.",
      highlights: [
        "Arrays are contiguous memory blocks",
        "Indexed addressing walks through elements efficiently",
        "String instructions move and compare character data directly",
      ],
    },
    sections: [
      {
        id: "arrays-and-strings",
        title: "Arrays, Strings & Advanced Instructions",
        body: [
          "An array in assembly is simply a sequence of values stored in adjacent memory locations. If you know the starting address and the size of each element, you can calculate the location of any item using an index.",
          "This is why indexed addressing is so important in assembly. It lets the CPU traverse arrays and structures without having to write out every address manually.",
          { type: "subheading", text: "Working with strings" },
          {
            type: "list",
            items: [
              "String instructions process character sequences in memory",
              "MOVS copies bytes or words from one location to another",
              "CMPS compares two strings element by element",
              "SCAS searches for a character or value",
            ],
          },
          "Once you understand arrays and strings in assembly, many higher-level data structures become easier to understand because you can see the memory pattern behind them.",
        ],
        code: {
          code: "MOV BX, OFFSET array\nMOV SI, 2\nMOV AX, [BX + SI]",
        },
        table: {
          caption: "Arrays and strings in assembly",
          headers: ["Concept", "Assembly idea", "Why it matters"],
          rows: [
            ["Array", "Contiguous memory block", "Stores many values together"],
            ["Index", "Offset from base address", "Locates individual elements"],
            ["String", "Sequential bytes in memory", "Supports text processing"],
          ],
        },
      },
    ],
    keyTakeaways: [
      "Arrays are memory blocks with predictable offsets.",
      "Indexed addressing makes traversal explicit and efficient.",
      "String instructions show how character data is handled at the machine level.",
    ],
  },

  "number-systems-representation": {
    slug: "number-systems-representation",
    level: "Beginner",
    duration: "4 days",
    preview: {
      summary:
        "Computers only understand 0 and 1. Every number, character, and pixel you see is stored as bit patterns. This module shows how to read and convert those patterns.",
      highlights: [
        "Binary, decimal, octal, and hexadecimal — when to use each",
        "Signed integers with 1's and 2's complement",
        "How letters and symbols become ASCII codes",
      ],
    },
    sections: [
      {
        id: "why-binary",
        title: "Why Binary?",
        body: [
          "Electronic circuits are reliable at two stable states: on (1) and off (0). Binary is base-2 — each digit is a bit (binary digit).",
          "A byte is 8 bits and can represent 256 different values (0–255 unsigned).",
        ],
        realLife: {
          title: "Real-life connection",
          text: "A light switch has two positions — not five. Engineers chose binary because transistors behave like billions of tiny switches. Your Wi-Fi password, file size, and CPU register values are all bit patterns underneath.",
        },
        diagram: "binary-byte",
      },
      {
        id: "positional-bases",
        title: "Positional Number Systems",
        body: [
          "In any base B, each digit position has a weight Bⁿ. COAL uses decimal (everyday), binary (machine), octal (legacy), and hexadecimal (compact binary shorthand).",
        ],
        table: {
          caption: "Same value (13₁₀) in different bases",
          headers: ["Base", "Name", "Representation", "Common use in COAL"],
          rows: [
            ["10", "Decimal", "13", "Human-readable numbers in comments and debugging"],
            ["2", "Binary", "1101", "True form inside registers and memory"],
            ["8", "Octal", "15", "Older Unix file permissions (e.g. chmod 755)"],
            ["16", "Hexadecimal", "D", "Memory dumps, addresses, color codes (#FF5733)"],
          ],
        },
        realLife: {
          title: "Real-life connection",
          text: "Web designers use hex for colors: #FF0000 is pure red — FF = 255 red, 00 green, 00 blue. Each pair is one byte in hex, easier to read than 111111110000000000000000.",
        },
      },
      {
        id: "conversion-quick",
        title: "Quick Conversion Reference",
        body: [
          "Decimal → binary: repeated division by 2, collect remainders bottom-up. Binary → hex: group bits in fours from the right.",
        ],
        table: {
          caption: "Handy conversion cheat sheet",
          headers: ["Decimal", "Binary", "Hex"],
          rows: [
            ["0", "0000", "0"],
            ["5", "0101", "5"],
            ["10", "1010", "A"],
            ["15", "1111", "F"],
            ["16", "1 0000", "10"],
            ["255", "1111 1111", "FF"],
          ],
        },
        diagram: "dec-to-bin",
      },
      {
        id: "signed-numbers",
        title: "Signed Numbers: 1's and 2's Complement",
        body: [
          "Unsigned bytes store 0–255. Signed bytes store roughly −128 to +127 using 2's complement — the standard for integer math in assembly.",
          "To get 2's complement: invert bits, then add 1. The leftmost bit indicates sign (0 = positive, 1 = negative).",
        ],
        table: {
          caption: "8-bit signed examples (2's complement)",
          headers: ["Decimal", "Binary", "Note"],
          rows: [
            ["+5", "0000 0101", "Positive — sign bit 0"],
            ["−1", "1111 1111", "All ones pattern"],
            ["−5", "1111 1011", "Invert +5, add 1"],
            ["−128", "1000 0000", "Smallest signed 8-bit value"],
          ],
        },
        realLife: {
          title: "Real-life connection",
          text: "Banking apps use signed integers for balances. If an program treats a negative balance as a huge positive number (unsigned mistake), you get overflow bugs — a classic COAL exam and interview topic.",
        },
      },
      {
        id: "ascii-bcd",
        title: "Characters: ASCII & BCD",
        body: [
          "ASCII maps characters to numbers. 'A' = 65, 'a' = 97, '0' = 48. BCD (Binary Coded Decimal) stores each decimal digit in 4 bits — used in calculators and legacy financial systems.",
        ],
        table: {
          caption: "Common ASCII codes (subset)",
          headers: ["Character", "Decimal", "Hex"],
          rows: [
            ["'0'", "48", "30"],
            ["'9'", "57", "39"],
            ["'A'", "65", "41"],
            ["'Z'", "90", "5A"],
            ["Space", "32", "20"],
            ["Newline", "10", "0A"],
          ],
        },
        realLife: {
          title: "Real-life connection",
          text: "When you press 'A' on a keyboard, the OS receives ASCII 65. Assembly string routines compare and move these numeric codes — not the letter shapes you see on screen.",
        },
      },
      {
        id: "floating-intro",
        title: "Floating-Point (Overview)",
        body: [
          "Real numbers (3.14, −0.5) use IEEE-754 format: sign bit + exponent + fraction. You will meet this in advanced COAL when handling scientific calculations.",
          "For now, remember: integers and characters have exact bit patterns; floats are approximations.",
        ],
        table: {
          caption: "Integer vs float storage (conceptual)",
          headers: ["Type", "Bits (typical)", "Example use"],
          rows: [
            ["8-bit unsigned", "8", "Pixel brightness 0–255"],
            ["32-bit signed int", "32", "Loop counters, array indexes"],
            ["32-bit float", "32", "Sensor readings, game physics"],
          ],
        },
      },
    ],
    keyTakeaways: [
      "Binary is the native language of hardware; hex is the shorthand engineers use daily.",
      "2's complement is how signed integers are stored and added in x86 assembly.",
      "Characters are just numbers (ASCII) — assembly works with those numbers directly.",
    ],
    relatedTool: {
      label: "Practice conversions interactively",
      to: "/number-systems/calculator",
    },
  },
};

function getCoalTopicContent(slug) {
  return coalTopicContent[slug] || null;
}

function getCoalTopicsWithContent() {
  return Object.keys(coalTopicContent);
}

export { coalTopicContent, getCoalTopicContent, getCoalTopicsWithContent };
export default coalTopicContent;
