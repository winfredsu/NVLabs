Getting Started
===
The gem5-NVP is a simulating framework for non-volatile processors (NVP) and non-volatile systems based on the gem5 simulator. It provides multiple interfaces for adding description of SimObjects' energy behavior as well as an energy management module which allows users to simulate state changes (power-on, power-off, etc.) easily.

## <span id="contents">Contents</span>
* [Contents](#contents)
* [Pre-Requirement](#prereq)
* [Download](#download)
* [Build](#build)
* [Usages](#usages)

## <span id="prereq">Pre-Requirement</span>
Gem5-NVP depends on nothing besides the dependencies of gem5 simulator. Tools needed before building gem5-NVP can be found at http://www.gem5.org/Dependencies.

## <span id="download">Download</span>
Gem5-NVP uses github to control its version. The latest version can be found at https://github.com/zlfben/gem5, and there are previous versions among tags of the repository (nvp-v*.*). You can get the latest stable version like this:
```Bash
git clone https://github.com/zlfben/gem5.git
cd gem5
git checkout nvp-v2.0
```

## <span id="build">Build</span>
The build process of gem5-NVP is almost the same as gem5 simulator. Scons is used to build target system to be simulated. Theoretically, different ISAs are supported by gem5-NVP. However, gem5-NVP is tested under ARM, so the following build option is recommended:
```Bash
mv README.md README
scons build/ARM/gem5.debug
```
One tricky thing is that gem5 checks its original raw README during its build, so we can simply rename README.md into README. Markdown file is used only for better github page.

## <span id="usages">Usages</span>
#### Simulation via Custom Simulation Script
Although gem5-NVP provides a simulation script that recieves arguments to control the whole system, we highly recommand that users need to understand how the system is assembled on the python side. Thus, we will introduce how to configure gem5-NVP, especially the energy part, in the python side. Here is a simple configuration python code of gem5 which is compatible with gem5-NVP but does not contain energy behavior:
```python
import m5
from m5.objects import *

system = System()
system.clk_domain = SrcClockDomain()
system.clk_domain.clock = '1MHz'
system.clk_domain.voltage_domain = VoltageDomain()
system.mem_mode = 'atomic'
system.mem_ranges = [AddrRange('512MB')]

system.cpu = AtomicSimpleCPU()

system.membus = SystemXBar()

system.cpu.icache_port = system.membus.slave
system.cpu.dcache_port = system.membus.slave

system.cpu.createInterruptController()

system.mem_ctrl = DDR3_1600_x64()
system.mem_ctrl.range = system.mem_ranges[0]
system.mem_ctrl.port = system.membus.master

system.system_port = system.membus.slave

process = LiveProcess()
process.cmd = ['tests/test-progs/hello/bin/arm/linux/hello']
system.cpu.workload = process
system.cpu.createThreads()

root = Root(full_system = False, system = system)
m5.instantiate()

print "Beginning simulation!"
exit_event = m5.simulate()
print 'Exiting @ tick %i because %s' % (m5.curTick(), exit_event.getCause())
```
To simulate energy-aware systems, we need to add several things to the original python code:
 - add a energy management module and connect it to other parts of the system
 - determine how much energy other parts in the system consume in a certain time unit
Here is an example code:
```python
import m5
from m5.objects import *

system = System()
system.clk_domain = SrcClockDomain()
system.clk_domain.clock = '1MHz'
system.clk_domain.voltage_domain = VoltageDomain()
system.mem_mode = 'atomic'
system.mem_ranges = [AddrRange('512MB')]

system.cpu = AtomicSimpleCPU()

# Energy management module of the system
system.energy_mgmt = EnergyMgmt()
# Tell EnergyMgmt the path to the energy profile
system.energy_mgmt.path_energy_profile = 'profile/energy_prof'
# Tell EnergyMgmt the time unit of the energy profile
system.energy_time_unit = '10us'
# Connect the energy port of the cpu to the one of EnergyMgmt
# Every SimObject has s_energy_port and m_energy_port. If you 
# want a SimObject to be under the control of EnergyMgmt, you
# should connect its s_energy_port to EnergyMgmt's m_enrgy_port 
# using "=".
system.cpu.s_energy_port = system.energy_mgmt.m_energy_port

system.membus = SystemXBar()

system.cpu.icache_port = system.membus.slave
system.cpu.dcache_port = system.membus.slave

system.cpu.createInterruptController()

system.mem_ctrl = DDR3_1600_x64()
system.mem_ctrl.range = system.mem_ranges[0]
system.mem_ctrl.port = system.membus.master

system.system_port = system.membus.slave

process = LiveProcess()
process.cmd = ['tests/test-progs/hello/bin/arm/linux/hello']
system.cpu.workload = process
system.cpu.createThreads()

root = Root(full_system = False, system = system)
m5.instantiate()

print "Beginning simulation!"
exit_event = m5.simulate()
print 'Exiting @ tick %i because %s' % (m5.curTick(), exit_event.getCause())
```
Now gem5-NVP only supports AtomicSimpleCPU. If you wants to add support for other models, you can visit https://github.com/zlfben/gem5/wiki/Concepts-and-Structure to get more information about the workflow of gem5-NVP and implement energy-aware behavior of the model you want. If you want to simulate of a system that contains external devices, you may want to check out the page https://github.com/zlfben/gem5/wiki/Virtual-Devices for more information. The code mentioned above can be found at "configs/example/simple_engy.py"

#### Simulation via Sample Simulation Script
Gem5-nvp provides an alternated script based on "./configs/example/se.py" to simulate energy-related systems, using System Call Emulation Mode in gem5. The path to the script is "./configs/example/se_engy.py". The script works just as simple_engy.py, but receives parameters to control the energy behaviors.
###### Arguments of Simulating Script
|Argument |Description |
|:-----------------------------|:---------------------------------------------------------------------------------------|
|--energy-prof={FILE} |Locate the path to energy profile. |
|--energy-time-unit={TIME_UNIT}|Set time unit of energy profile. (Default '1us') |
#### Arguments of Target System Related to gem5-NVP
A new debug flag is introduced in gem5-NVP. Users can type the following command to output the debug information of EnergyMgmt module:
```Bash
build/ARM/gem5.debug --debug-flags=EnergyMgmt [ simulation script ]
```
|Argument |Description |
|:--------------------|:---------------------------------------------------------------------------------|
|--debug-flags={FLAGS}|Decide what kinds of debug information to print. "EnergyMgmt" for energy behavior.|
|--debug-file={FILE} |Set the target file for debug output. |
#### Example
The following examples will simulate systems running "./test/test-progs/hello/bin/arm/linux/hello".
To run exactly like gem5 (No energy behavior is simulated):
```Bash
build/ARM/gem5.debug configs/example/se_engy.py -c tests/test-progs/hello/bin/arm/linux/hello
```
To simulate atomic cpu's energy behavior, using energy profile "./profile/energy_prof", with energy_time_unit = 1us, printing all the debug information of energy behavior into "./m5out/a.out":
```Bash
build/ARM/gem5.debug --debug-flags=EnergyMgmt --debug-file=a.out configs/example/se_engy.py -c tests/test-progs/hello/bin/arm/linux/hello --energy-profile=./profile/energy_prof --energy-time-unit='1us' 
```
To use the custom script: 
```Bash
build/ARM/gem5.debug configs/example/simple_engy.py
```

Gem5-NVP also supports more advanced functions which require developers to modify source code, like simulating systems with 2-threshold energy state machine. Tutorials and examples of such usage can be found at https://github.com/zlfben/gem5/wiki.

gem5 README
===
This is the gem5 simulator.

The main website can be found at http://www.gem5.org

A good starting point is http://www.gem5.org/Introduction, and for
more information about building the simulator and getting started
please see http://www.gem5.org/Documentation and
http://www.gem5.org/Tutorials.

To build gem5, you will need the following software: g++ or clang,
Python (gem5 links in the Python interpreter), SCons, SWIG, zlib, m4,
and lastly protobuf if you want trace capture and playback
support. Please see http://www.gem5.org/Dependencies for more details
concerning the minimum versions of the aforementioned tools.

Once you have all dependencies resolved, type 'scons
build/<ARCH>/gem5.opt' where ARCH is one of ALPHA, ARM, NULL, MIPS,
POWER, SPARC, or X86. This will build an optimized version of the gem5
binary (gem5.opt) for the the specified architecture. See
http://www.gem5.org/Build_System for more details and options.

With the simulator built, have a look at
http://www.gem5.org/Running_gem5 for more information on how to use
gem5.

The basic source release includes these subdirectories:
  - configs: example simulation configuration scripts
  - ext: less-common external packages needed to build gem5
  - src: source code of the gem5 simulator
  - system: source for some optional system software for simulated systems
  - tests: regression tests
  - util: useful utility programs and files

To run full-system simulations, you will need compiled system firmware
(console and PALcode for Alpha), kernel binaries and one or more disk
images. Please see the gem5 download page for these items at
http://www.gem5.org/Download

If you have questions, please send mail to gem5-users@gem5.org

Enjoy using gem5 and please share your modifications and extensions.
