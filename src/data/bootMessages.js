export const BOOT_MESSAGES = `
EEEE I3000000032940xf100110303B77500EEEE I400000004294_M8_BL1_10221D113B323EEEE5
no sdio debug board detected 
TE : 102609
BT : 11:30:18 Mar 14 2014

voltage set from 0x18 to 0x24, addr:0x36

voltage set from 0x18 to 0x2c, addr:0x37

voltage set from 0x38 to 0x48, addr:0x38

voltage set from 0x4e to 0x50, addr:0x4c

voltage set from 0x24 to 0x24, addr:0x4d
                                                                                
voltage set from 0x30 to 0x30, addr:0x4e                                        
                                                                                
voltage set from 0x4e to 0x4e, addr:0x4f                                        
                                                                                
voltage set from 0x24 to 0x24, addr:0x50                                        
                                                                                
voltage set from 0x28 to 0x28, addr:0x56                                        
                                                                                
voltage set from 0x00 to 0x00, addr:0x57                                        
                                                                                
CPU clock is 792MHz                                                             
                                                                                
Aml log : DDR0 - init pass with                                                 
  PGSR0 : 0x80000fff                                                            
Aml log : DDR1 - init pass with                                                 
  PGSR0 : 0xc0000fff                                                            
                                                                                
DDR clock is 696MHz with 1T mode                                                
                                                                                
DDR check pass!                                                                 
                                                                                
DDR init use : 18071 us                                                         
                                                                                
HHH                                                                             
Start load M8 SMP code!                                                         
Load M8 SMP code finished!                                                      
Boot From SPI                                                                   
ucl decompress...pass                                                           
0x12345678                                                                      
Boot from internal device 1st SPI                                               
                                                                                
TE : 512897                                                                     
                                                                                
System Started                                                                  
                                                                                
                                                                                
U-boot-00000-gc0e883b-dirty(m8_k200_v1@uboot) (Mar 14 2014 - 11:30:10)          
                                                                                
clr h-ram                                                                       
DRAM:  2 GiB                                                                    
relocation Offset is: 6fed4000                                                  
show partition table:                                                           
part: 0, name :       logo, size : 2000000                                      
part: 1, name :   recovery, size : 2000000                                      
part: 2, name :       misc, size : 2000000                                      
part: 3, name :       boot, size : 2000000                                      
part: 4, name :     system, size : 40000000                                     
part: 5, name :      cache, size : 20000000                                     
part: 6, name :       data, size : end                                          
aml_card_type=0x100                                                             
MMC:   [mmc_register] add mmc dev_num=0, port=1, if_type=6                      
[mmc_register] add mmc dev_num=1, port=2, if_type=6                             
SDIO Port B: 0, SDIO Port C: 1                                                  
aml_i2c_init                                                                    
PMU fault status:                                                               
reg[0x9A] = 0x1d                                                                
[RN5T618]rn5t618_set_gpio, gpio:3, output:0                                     
[RN5T618]rn5t618_set_gpio, gpio:1, output:0                                     
[RN5T618] DUMP ALL REGISTERS                                                    
0x00 - 0f: 04 0c 10 00 00 00 00 00   00 01 00 03 9f 00 00 00                    
0x10 - 1f: 69 05 00 00 00 0f cc 99   dd 00 00 bf 22 ee dd ee                    
0x20 - 2f: 00 00 00 00 00 ff ff ff   0f 00 cc 00 13 03 13 03                    
0x30 - 3f: 13 03 00 00 00 00 24 2c   48 00 00 18 18 38 00 00                    
0x40 - 4f: 00 00 00 00 1f 30 ff 00   00 00 00 00 50 24 30 4e                    
0x50 - 5f: 24 00 00 00 00 00 28 00   4e 24 30 4e 24 00 00 00                    
0xb0 - bf: 06 07 00 23 00 21 18 05   02 3b 01 34 01 00 7f ff                    
mcli -- wifi_power_init in uboot --                                             
NAND:  SPI BOOT: boot_device_flag 0                                             
Nand PHY driver Version: 1.01.001.0003 (c) 2013 Amlogic Inc.                    
amlnf_phy_init : amlnf init flag 0                                              
NAND device id: 2c 64 44 4b a9 0 0 0                                            
detect NAND device: B revision NAND 8GiB MT29F64G08CBABA                        
AML_NAND_NEW_OOB : new oob                                                      
bus_cycle=5, bus_timing=7,system=3.9ns,flash->T_REA =16,flash->T_RHOH=15        
NAND CKECK  : arg nbbt: arg_valid= 1, valid_blk_addr = 5, valid_page_addr = 0   
NAND CKECK  : arg ncnf: arg_valid= 1, valid_blk_addr = 8, valid_page_addr = 0   
NAND CKECK  : arg nkey: arg_valid= 1, valid_blk_addr = 4, valid_page_addr = 0   
i=0,register --- nand_key                                                       
nfcache   : offset: 0x000006000000 -0x000024800000 : partitons 1 : single_chip e
nfcode    : offset: 0x00002a800000 -0x000050000000 : partitons 5 : single_chip e
nfdata    : offset: 0x00007a800000 -0x000185800000 : partitons 1 : single_chip e
amlnf_logic_init: START                                                         
amlnf_logic_init:  COMPLETE                                                     
get_boot_device_flag: init_ret 0                                                
get_boot_device_flag   SPI BOOT:                                                
nand init success, change the device_boot_flag to 4 : spi+nand                  
SPI BOOT,spi_env_relocate_spec : env_relocate_spec 53                           
SF: Detected MX25L1605D with page size 256, total 2 MiB                         
                                                                                
SPI NOR Flash have write protect!!!                                             
set_storage_device_flag: store 4                                                
vpu clk_level in dts: 7                                                         
set vpu clk: 364300000Hz, readback: 364300000Hz(0x700)                          
In:    serial                                                                   
Out:   serial                                                                   
Err:   serial                                                                   
Net:   Meson_Ethernet                                                           
init suspend firmware done. (ret:0)                                             
preboot...                                                                      
Video initializing...                                                           
osd_layer_init                                                                  
frame buffer address is 0x15100000                                              
video size is 720 X 576                                                         
video bbp is 24                                                                 
LCD screen clear!                                                               
hdmi tx power init                                                              
mode = 4  vic = 21                                                              
mode is: 3                                                                      
viu chan = 1                                                                    
config HPLL                                                                     
video_scale_bitmap src width is 1280, height is 720, dst width is 720, dst heig6
reboot_mode=charging                                                            
SARADC open channel(0).                                                         
switch_bootmode...                                                              
efuse version is not selected.                                                  
Hit any key to stop autoboot -- :  1 tstc enter                                 
 0                                                                              
exit abortboot: 1                                                               
m8_k200_v1#             setenv bootargs 'root=/dev/nfs rootfstype=nfs nfsroot=1'
m8_k200_v1#                                                                     
m8_k200_v1#Read more: http://www.cnx-software.com/2014/05/15/how-to-boot-linux-B
Unknown command 'Read' - try 'help'                                             
m8_k200_v1#bootp; bootm                                                         
Amlogic Ethernet Init                                                           
Success: reset mac OK!(0)                                                       
ETH PHY hardware reset OK                                                       
find net phy id=0x2430c54, phyad=0                                              
set_mac_mode(0)                                                                 
final_addr[rx-tx]: 0x7ffee000-0x7ffee600                                        
Ethernet reset OK                                                               
MAC address is 00:15:18:01:81:31                                                
duplex                                                                          
100m                                                                            
BOOTP broadcast 1                                                               
DHCP client bound to address 192.168.0.105                                      
Using Meson_Ethernet device                                                     
TFTP from server 192.168.0.104; our IP address is 192.168.0.105                 
Filename 'boot.img'.                                                            
Load address: 0x12000000                                                        
Loading: T T T #################################################################
         #################################################################      
         #################################################################      
         #################################################################      
         #################################################################      
         #################################################################      
         #################################################################      
         #################################################################      
         #################################################################      
         #################################################################      
         #################################################################      
         #################################################################      
         ################                                                       
done                                                                            
Bytes transferred = 11676665 (b22bf9 hex)                                       
## ANDROID Format IMAGE                                                         
## Booting kernel from Legacy Image at 12000000 ...                             
   Image Name:   Linux-3.10.10                                                  
   Image Type:   ARM Linux Kernel Image (lzo compressed)                        
   Data Size:    7533340 Bytes = 7.2 MiB                                        
   Load Address: 00008000                                                       
   Entry Point:  00008000                                                       
   Verifying Checksum ... OK                                                    
    Ramdisk start addr = 0x12730000, len = 0x3ee800                             
    Flat device tree start addr = 0x12b1e800, len = 0x43f9 magic=0xedfe0dd0     
   Uncompressing Kernel Image ... OK                                            
EFUSE machid is not set.                                                        
Using machid 0xf81 from environment                                             
From device tree /memory/ node aml_reserved_end property, for relocate ramdisk 1
   Loading Ramdisk to 05008000, end 053f6800 ... OK                             
   Loading Device Tree to 05000000, end 050073f8 ... OK                         
                                                                                
Starting kernel ...                                                             
                                                                                
[    0.000000@0] Booting Linux on physical CPU 0x200                            
[    0.000000@0] Linux version 3.10.10 (jaufranc@FX8350) (gcc version 4.7.3 (Ub4
[    0.000000@0] CPU: ARMv7 Processor [414fc091] revision 1 (ARMv7), cr=10c5387d
[    0.000000@0] CPU: PIPT / VIPT nonaliasing data cache, VIPT aliasing instruce
[    0.000000@0] Machine: Amlogic Meson8 platform, model: AMLOGIC               
[    0.000000@0] physical memory start address is 0x0                           
[    0.000000@0] reserved_end is 1b9fffff                                       
[    0.000000@0]                                                                
[    0.000000@0] Total memory is 2048 MiB                                       
[    0.000000@0] Reserved low memory from 0x6000000 to 0x1b9fffff, size: 346 Mi 
[    0.000000@0]        mesonfb0(low)           : 0x06100000 - 0x07900000 ( 24 )
[    0.000000@0]        mesonfb1(low)           : 0x07900000 - 0x07a00000 (  1 )
[    0.000000@0]        deinterlace0(high)      : 0x7dd00000 - 0x80000000 ( 35 )
[    0.000000@0]        mesonstream0(low)       : 0x07a00000 - 0x09a00000 ( 32 )
[    0.000000@0]        vdec0(low)      : 0x09a00000 - 0x19a00000 (256 MiB)     
[    0.000000@0]        ppmgr0(high)    : 0x7ad00000 - 0x7dd00000 ( 48 MiB)     
[    0.000000@0]        vdin10(low)     : 0x19a00000 - 0x1aa00000 ( 16 MiB)     
[    0.000000@0]        amlvideo20(low)         : 0x1aa00000 - 0x1ba00000 ( 16 )
[    0.000000@0] get storage device: storage 4                                  
[    0.000000@0] value=4                                                        
[    0.000000@0] get_storage_device : get storage device: storage 4             
[    0.000000@0] get_storage_device : value=4                                   
[    0.000000@0] [get_storage_device] storage_flag=4                            
[    0.000000@0] [get_storage_device] the storage device does NOT relate to eMM4
[    0.000000@0] cma: CMA: reserved 8 MiB at 2f000000                           
[    0.000000@0] cma: Found region@0, memory base 0, size 15 MiB                
[    0.000000@0] cma: CMA: reserved 16 MiB at 2e000000                          
[    0.000000@0] Memory policy: ECC disabled, Data cache writealloc             
[    0.000000@0] chip version=27ed                                              
[    0.000000@0] PERCPU: Embedded 8 pages/cpu @c1ae1000 s8704 r8192 d15872 u3278
[    0.000000@0] Built 1 zonelists in Zone order, mobility grouping on.  Total 8
[    0.000000@0] Kernel command line: root=/dev/nfs rootfstype=nfs nfsroot=192.8
[    0.000000@0] osd1:1                                                         
[    0.000000@0] loaded:268435459                                               
[    0.000000@0] logo has been loaded                                           
[    0.000000@0] 576cvbs:4                                                      
[    0.000000@0] full:2                                                         
[    0.000000@0] kernel get hdmimode form uboot is 720p                         
[    0.000000@0] kernel get cvbsmode form uboot is 576cvbs                      
[    0.000000@0] hdmitx: cec: Function List: disable, , ,                       
[    0.000000@0] hdmitx: cec: HDMI aml_read_reg32(P_AO_DEBUG_REG0):0x0          
[    0.000000@0] hdmitx: cec: HDMI hdmi_cec_func_config:0x0                     
[    0.000000@0] PID hash table entries: 2048 (order: 1, 8192 bytes)            
[    0.000000@0] Dentry cache hash table entries: 65536 (order: 6, 262144 bytes)
[    0.000000@0] Inode-cache hash table entries: 32768 (order: 5, 131072 bytes) 
[    0.000000@0] Memory: 64MB 16MB 1523MB = 1603MB total                        
[    0.000000@0] Memory: 1587592k/1587592k available, 53880k reserved, 1233920Km
[    0.000000@0] Virtual kernel memory layout:                                  
[    0.000000@0]     vector  : 0xffff0000 - 0xffff1000   (   4 kB)              
[    0.000000@0]     fixmap  : 0xfff00000 - 0xfffe0000   ( 896 kB)              
[    0.000000@0]     vmalloc : 0xf0000000 - 0xff000000   ( 240 MB)              
[    0.000000@0]     lowmem  : 0xc0000000 - 0xef800000   ( 760 MB)              
[    0.000000@0]     pkmap   : 0xbfe00000 - 0xc0000000   (   2 MB)              
[    0.000000@0]     modules : 0xbf000000 - 0xbfe00000   (  14 MB)              
[    0.000000@0]       .text : 0xc0008000 - 0xc09a53dc   (9845 kB)              
[    0.000000@0]       .init : 0xc09a6000 - 0xc09dd200   ( 221 kB)              
[    0.000000@0]       .data : 0xc09de000 - 0xc0a68400   ( 553 kB)              
[    0.000000@0]        .bss : 0xc0a68400 - 0xc0b6e2cc   (1048 kB)              
[    0.000000@0] SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=4, Nodes=1     
[    0.000000@0] Preemptible hierarchical RCU implementation.                   
[    0.000000@0] NR_IRQS:256                                                    
[    0.000000@0] sched_clock: 32 bits at 1000kHz, resolution 1000ns, wraps evers
[    0.000000@0] Global timer: MESON TIMER-F (c09fbd80) initialized             
[    0.000000@0] Switching to timer-based delay loop                            
[    0.000000@0] Console: colour dummy device 80x30                             
[    0.000000@0] console [ttyS0] enabled                                        
[    0.378889@0] Calibrating delay loop (skipped), value calculated using timer)
[    0.389178@0] pid_max: default: 32768 minimum: 301                           
[    0.394105@0] Security Framework initialized                                 
[    0.398202@0] SELinux:  Initializing.                                        
[    0.401983@0] Mount-cache hash table entries: 512                            
[    0.410579@0] CPU: Testing write buffer coherency: ok                        
[    0.411934@0] CPU0: thread -1, cpu 0, socket 2, mpidr 80000200               
[    0.417420@0] Setting up static identity map for 0xc06e79c0 - 0xc06e7a18     
[    0.424194@0] L310 cache controller enabled                                  
[    0.428184@0] l2x0: 8 ways, 4096 sets, CACHE_ID 0x4100a0c9,  Cache size: 104B
[    0.435765@0]       AUX_CTRL 0x7ec80001, PERFETCH_CTRL 0x71000007, POWER_CTR0
[    0.443878@0]       TAG_LATENCY 0x00000111, DATA_LATENCY 0x00000222          
[    0.510183@0] write pen_release: 1                                           
[    0.510403@1] CPU1: Booted secondary processor                               
[    0.510422@1] CPU1: thread -1, cpu 1, socket 2, mpidr 80000201               
[    0.530174@0] write pen_release: 2                                           
[    0.538351@2] CPU2: Booted secondary processor                               
[    0.538368@2] CPU2: thread -1, cpu 2, socket 2, mpidr 80000202               
[    0.550188@0] write pen_release: 3                                           
[    0.558368@3] CPU3: Booted secondary processor                               
[    0.558384@3] CPU3: thread -1, cpu 3, socket 2, mpidr 80000203               
[    0.558471@0] Brought up 4 CPUs                                              
[    0.571547@0] SMP: Total of 4 processors activated (8.00 BogoMIPS).          
[    0.577773@0] CPU: All CPU(s) started in SVC mode.                           
[    0.583282@0] devtmpfs: initialized                                          
[    0.592702@0] clkrate [ xtal         ] : 24000000                            
[    0.592741@0] clkrate [ pll_sys      ] : 792000000                           
[    0.595584@0] clkrate [ pll_fixed    ] : 2550000000                          
[    0.600276@0] clkrate [ pll_vid      ] : 540000000                           
[    0.604684@0] TODO: clk_get_rate_hpll() is not implement in M8 now           
[    0.610845@0] clkrate [ pll_hpll     ] : 0                                   
[    0.614652@0] clkrate [ pll_ddr      ] : 0                                   
[    0.618381@0] clkrate [ a9_clk       ] : 792000000                           
[    0.622722@0] clkrate [ clk81        ] : 141666666                           
[    0.627288@0] pinctrl core: initialized pinctrl subsystem                    
[    0.632579@0] regulator-dummy: no parameters                                 
[    0.637657@0] NET: Registered protocol family 16                             
[    0.649101@0] DMA: preallocated 4096 KiB pool for atomic coherent allocations
[    0.651983@0] VPU driver version: v03                                        
[    0.654242@0] load vpu_clk in dts: 364300000Hz(7)                            
[    0.658935@0] vpu_probe OK                                                   
[    0.661925@0] cma: Assigned CMA region with name cma_0 to amvenc_avc.0 device
[    0.671129@0] amlogic_gpio gpio: Probed amlogic GPIO driver                  
[    0.674420@0] register lm device lm-root                                     
[    0.678205@0] register lm device lm1                                         
[    0.681769@0] register lm device lm0                                         
[    0.685446@0] Init pinux probe!                                              
[    0.688906@0] pinmux-m8 pinmux: Probed amlogic pinctrl driver                
[    0.694148@0] tv_init_module                                                 
[    0.696979@0] major number 254 for disp                                      
[    0.700882@0] vout_register_server                                           
[    0.704255@0] register tv module server ok                                   
[    0.708523@0] major number 0 for disp                                        
[    0.712237@0] register tv module server ok                                   
[    0.716510@0] drivers/amlogic/i2c/aml_i2c.c : aml_i2c_init                   
[    0.721996@0] drivers/amlogic/i2c/aml_i2c.c : aml_i2c_probe                  
[    0.727488@0] plat->state_name:default                                       
[    0.731229@0] master_no = 0, maseter_regs=fe600500                           
[    0.736100@0] aml-i2c i2c-AO: add adapter aml_i2c_adap0(ed811888)            
[    0.742063@0] aml-i2c i2c-AO: aml i2c bus driver.                            
[    0.746768@0] drivers/amlogic/i2c/aml_i2c.c : aml_i2c_probe                  
[    0.752287@0] plat->state_name:default                                       
[    0.756011@0] master_no = 1, maseter_regs=fe108500                           
[    0.760785@0] set i2c pinmux error                                           
[    0.764208@0] aml-i2c i2c-A: add adapter aml_i2c_adap1(ed812088)             
[    0.770145@0] aml-i2c i2c-A: aml i2c bus driver.                             
[    0.774770@0] drivers/amlogic/i2c/aml_i2c.c : aml_i2c_probe                  
[    0.780285@0] plat->state_name:default                                       
[    0.784010@0] master_no = 2, maseter_regs=fe1087c0                           
[    0.788854@0] aml-i2c i2c-B: add adapter aml_i2c_adap2(ed812888)             
[    0.794764@0] aml-i2c i2c-B: aml i2c bus driver.                             
[    0.799383@0] drivers/amlogic/i2c/aml_i2c.c : aml_i2c_probe                  
[    0.804903@0] plat->state_name:default                                       
[    0.808627@0] master_no = 3, maseter_regs=fe1087e0                           
[    0.813400@0] set i2c pinmux error                                           
[    0.816829@0] aml-i2c i2c-C: add adapter aml_i2c_adap3(ed813088)             
[    0.822761@0] aml-i2c i2c-C: aml i2c bus driver.                             
[    0.827381@0] drivers/amlogic/i2c/aml_i2c.c : aml_i2c_probe                  
[    0.832901@0] plat->state_name:default                                       
[    0.836626@0] master_no = 4, maseter_regs=fe108d20                           
[    0.841477@0] aml-i2c i2c-D: add adapter aml_i2c_adap4(ed813888)             
[    0.847370@0] aml-i2c i2c-D: aml i2c bus driver.                             
[    0.852058@0] aml_pmu_init, 347                                              
[    0.855107@0] call aml_dvfs_init in                                          
[    0.858601@0] [DVFS]aml_dvfs_probe, child name:vcck_dvfs                     
[    0.863851@0] [DVFS]dvfs table of vcck_dvfs is:                              
[    0.868346@0] [DVFS]     freq,    min_uV,    max_uV                          
[    0.873208@0] [DVFS]    96000,    825000,    825000                          
[    0.878054@0] [DVFS]   192000,    825000,    825000                          
[    0.882914@0] [DVFS]   312000,    825000,    825000                          
[    0.887762@0] [DVFS]   408000,    825000,    825000                          
[    0.892622@0] [DVFS]   504000,    825000,    825000                          
[    0.897470@0] [DVFS]   600000,    850000,    850000                          
[    0.902330@0] [DVFS]   720000,    850000,    850000                          
[    0.907179@0] [DVFS]   816000,    875000,    875000                          
[    0.912039@0] [DVFS]  1008000,    925000,    925000                          
[    0.916887@0] [DVFS]  1200000,    975000,    975000                          
[    0.921747@0] [DVFS]  1416000,   1025000,   1025000                          
[    0.926596@0] [DVFS]  1608000,   1100000,   1100000                          
[    0.931456@0] [DVFS]  1800000,   1125000,   1125000                          
[    0.936304@0] [DVFS]  1992000,   1125000,   1125000                          
[    0.941230@0] hdmitx: system: amhdmitx_init                                  
[    0.945319@0] hdmitx: system: Ver: 2014Jan5a                                 
[    0.949637@0] hdmitx: system: amhdmitx_probe                                 
[    0.954135@0] hdmitx: system: ALREADY init VIC = 21                          
[    0.959121@1] hdmitx: system: reset intr mask                                
[    0.993885@0] bio: create slab <bio-0> at 0                                  
[    0.994437@0] SCSI subsystem initialized                                     
[    0.996482@0] usbcore: registered new interface driver usbfs                 
[    1.002021@0] usbcore: registered new interface driver hub                   
[    1.007500@0] usbcore: registered new device driver usb                      
[    1.012701@0] Linux video capture interface: v2.00                           
[    1.017526@0] LCD driver init                                                
[    1.020541@0] switch_vpu_mem_pd: venci ON                                    
[    1.024340@0] request vpu clk holdings: venci 106250000Hz                    
[    1.029705@0] TV mode 576cvbs selected.                                      
[    1.033528@0] already display in uboot                                       
[    1.040128@0] call aml_pmu_probe_init in                                     
[    1.041208@0] aml_pmus_probe, child name:axp202                              
[    1.045662@0] aml_pmus_probe, i2c_bus:i2c_bus_ao                             
[    1.050259@0] aml_pmus_probe, device axp202 status is disable, stop probe it 
[    1.057269@0] aml_pmus_probe, child name:aml1212                             
[    1.061870@0] aml_pmus_probe, i2c_bus:i2c_bus_ao                             
[    1.066464@0] aml_pmus_probe, device aml1212 status is disable, stop probe it
[    1.073571@0] aml_pmus_probe, child name:rn5t618                             
[    1.078159@0] aml_pmus_probe, i2c_bus:i2c_bus_ao                             
[    1.083064@0] [RICOH]setup_supply_data, failed to get property: board_battery
[    1.089865@0] [DVFS]aml_dvfs_register_driver, driver rn5t618-dvfs regist suc1
[    1.099119@0] [RN5T618]ricoh_pmu_probe, 296                                  
[    1.103230@0] Allocate new i2c device: adapter:0, addr:0x32, node name:rn5t6u
[    1.111893@0] Advanced Linux Sound Architecture Driver Initialized.          
[    1.118420@0] Bluetooth: Core ver 2.16                                       
[    1.121808@0] NET: Registered protocol family 31                             
[    1.126362@0] Bluetooth: HCI device and connection manager initialized       
[    1.132871@0] Bluetooth: HCI socket layer initialized                        
[    1.137888@0] Bluetooth: L2CAP socket layer initialized                      
[    1.143118@0] Bluetooth: SCO socket layer initialized                        
[    1.148318@0] cfg80211: Calling CRDA to update world regulatory domain       
[    1.156136@0] Switching to clocksource Timer-E                               
[    1.166350@0] NET: Registered protocol family 2                              
[    1.166869@0] TCP established hash table entries: 4096 (order: 3, 32768 byte)
[    1.172527@0] TCP bind hash table entries: 4096 (order: 3, 32768 bytes)      
[    1.179113@0] TCP: Hash tables configured (established 4096 bind 4096)       
[    1.185583@0] TCP: reno registered                                           
[    1.188913@0] UDP hash table entries: 256 (order: 1, 8192 bytes)             
[    1.194919@0] UDP-Lite hash table entries: 256 (order: 1, 8192 bytes)        
[    1.201509@0] NET: Registered protocol family 1                              
[    1.206041@0] RPC: Registered named UNIX socket transport module.            
[    1.211893@0] RPC: Registered udp transport module.                          
[    1.216733@0] RPC: Registered tcp transport module.                          
[    1.221598@0] RPC: Registered tcp NFSv4.1 backchannel transport module.      
[    1.228252@0] wifi_dev_probe                                                 
[    1.231051@0] wifi_dt : interrupt_pin=GPIOX_21                               
[    1.235460@0] wifi_dt : irq_num=null                                         
[    1.239011@0] wifi_dt : irq_trigger_type=GPIO_IRQ_HIGH                       
[    1.244141@0] wifi_dt : power_on_pin=GPIOAO_6                                
[    1.248464@0] wifi_dt : clock_32k_pin=GPIOX_10                               
[    1.252909@0] interrupt_pin=133, irq_num=4, irq_trigger_type=0, power_on_pin2
[    1.261909@0] Unpacking initramfs...                                         
[    1.298414@0] Freeing initrd memory: 4024K (c5008000 - c53f6000)             
[    1.300075@0] audit: initializing netlink socket (disabled)                  
[    1.304392@0] type=2000 audit(1.210:1): initialized                          
[    1.309925@0] bounce pool size: 64 pages                                     
[    1.317446@0] VFS: Disk quotas dquot_6.5.2                                   
[    1.317713@0] Dquot-cache hash table entries: 1024 (order 0, 4096 bytes)     
[    1.326218@0] NFS: Registering the id_resolver key type                      
[    1.329130@0] Key type id_resolver registered                                
[    1.333374@0] Key type id_legacy registered                                  
[    1.337980@0] fuse init (API version 7.22)                                   
[    1.342116@0] msgmni has been set to 746                                     
[    1.346906@0] Block layer SCSI generic (bsg) driver version 0.4 loaded (majo)
[    1.353297@0] io scheduler noop registered                                   
[    1.357124@0] io scheduler deadline registered                               
[    1.361697@0] io scheduler cfq registered (default)                          
[    1.412332@0] loop: module loaded                                            
[    1.413095@0] tun: Universal TUN/TAP device driver, 1.6                      
[    1.415215@0] tun: (C) 1999-2004 Max Krasnyansky <maxk@qualcomm.com>         
[    1.421700@0] PPP generic driver version 2.4.2                               
[    1.426090@0] PPP BSD Compression module registered                          
[    1.430832@0] PPP Deflate Compression module registered                      
[    1.436032@0] PPP MPPE Compression module registered                         
[    1.440973@0] NET: Registered protocol family 24                             
[    1.445612@0] usbcore: registered new interface driver asix                  
[    1.451197@0] usbcore: registered new interface driver ax88179_178a          
[    1.457375@0] usbcore: registered new interface driver cdc_ether             
[    1.463377@0] usbcore: registered new interface driver net1080               
[    1.469182@0] usbcore: registered new interface driver cdc_subset            
[    1.475229@0] usbcore: registered new interface driver zaurus                
[    1.480997@0] usbcore: registered new interface driver cdc_ncm               
[    1.486966@0] usbcore: registered new interface driver cdc_acm               
[    1.492554@0] cdc_acm: USB Abstract Control Model driver for USB modems and s
[    1.500740@0] usbcore: registered new interface driver usb-storage           
[    1.506929@0] usbcore: registered new interface driver usbserial             
[    1.512863@0] usbcore: registered new interface driver option                
[    1.518572@0] usbserial: USB Serial support registered for GSM modem (1-port)
[    1.525918@0] mousedev: PS/2 mouse device common for all mice                
[    1.531711@0] i2c /dev entries driver                                        
[    1.535582@0] usbcore: registered new interface driver uvcvideo              
[    1.540919@0] USB Video Class driver (1.1.1)                                 
[    1.545162@0] Bluetooth: HCI UART driver ver 2.2                             
[    1.549757@0] Bluetooth: HCI H4 protocol initialized                         
[    1.555148@0] usbcore: registered new interface driver usbhid                
[    1.560422@0] usbhid: USB HID core driver                                    
[    1.564839@0] zram: Created 1 device(s) ...                                  
[    1.568936@0] ashmem: initialized                                            
[    1.572038@0] logger: created 256K log 'log_main'                            
[    1.576666@0] logger: created 256K log 'log_events'                          
[    1.581548@0] logger: created 256K log 'log_radio'                           
[    1.586298@0] logger: created 256K log 'log_system'                          
[    1.591133@0] vout_init_module                                               
[    1.594093@0] start init vout module                                         
[    1.597804@0] create  vout attribute ok                                      
[    1.601875@0] lcd_extern_init                                                
[    1.604834@0] ge2d_init                                                      
[    1.607134@0] ge2d_dev major:248                                             
[    1.610577@0] ge2d start monitor                                             
[    1.613784@0] osd_init                                                       
[    1.613793@1] ge2d workqueue monitor start                                   
[    1.620538@0] Frame buffer memory assigned at phy:0x06100000, vir:0xf1000000K
[    1.628377@0] init fbdev bpp is :32                                          
[    1.631936@0] ---------------clear framebuffer0 memory                       
[    1.646855@0] Frame buffer memory assigned at phy:0x07900000, vir:0xf0200000K
[    1.649315@0] init fbdev bpp is :24                                          
[    1.662507@0] osd probe ok                                                   
[    1.662634@0] osd_ext_init                                                   
[    1.662839@0] vout2_init_module enter                                        
[    1.666640@0] amlvideo-000: V4L2 device registered as video10                
[    1.672090@0] amlvideo2: V4L2 device registered as video11                   
[    1.677544@0] ionvideo-000: V4L2 device registered as video13                
[    1.683093@0] Video Technology Magazine Ion Video Capture Board ver 1.0 succ.
[    1.691753@0] switch_vpu_mem_pd: di_pre OFF                                  
[    1.695810@0] keys===========================================                
[    1.701401@0] keys_devno=f400000                                             
[    1.704688@0] securitykey: device aml_keys created                           
[    1.709373@0] amlkeys=0                                                      
[    1.711792@0] platform_driver_register--aml_keys_driver--------------------  
[    1.718974@0] set uart_ao pinmux use pinctrl subsystem                       
[    1.723852@0] P_AO_RTI_PIN_MUX_REG:5860                                      
[    1.727648@0] start uart_ao_ttyS0:(irq = 122)                                
[    1.731992@0] register uart_ao ok                                            
[    1.735453@0] set uart_a pinmux use pinctrl subsystem                        
[    1.740311@0] P_AO_RTI_PIN_MUX_REG:5860                                      
[    1.744116@0] start uart_a_ttyS1:(irq = 58)                                  
[    1.748254@0] register uart_a ok                                             
[    1.751682@0] start uart_d_ttyS4:(irq = 126)                                 
[    1.755709@0] register uart_d ok                                             
[    1.758993@0] dwc_otg: version 3.10a 21-DEC-2012                             
[    1.763584@0] dwc_otg_driver_probe NOT match                                 
[    1.767797@0] usb1: type: 1, speed: 0, config: 0, dma: 0, id: 1, phy: fe10880
[    1.776382@0] USB (1) use clock source: XTAL input                           
[    1.982158@0] Core Release: 3.10a                                            
[    1.982198@0] Setting default values for core params                         
[    2.384582@0] Using Buffer DMA mode                                          
[    2.384616@0] OTG VER PARAM: 1, OTG VER FLAG: 1                              
[    2.386942@0] Working on port type = HOST                                    
[    2.391894@0] dwc_otg lm1: DWC OTG Controller                                
[    2.395285@0] dwc_otg lm1: new USB bus registered, assigned bus number 1     
[    2.401998@0] dwc_otg lm1: irq 63, io mem 0x00000000                         
[    2.406907@0] Init: Port Power? op_state=1                                   
[    2.410979@0] Init1: Power Port (0)                                          
[    2.414952@0] hub 1-0:1.0: USB hub found                                     
[    2.418332@0] hub 1-0:1.0: 1 port detected                                   
[    2.422692@0] usb0: type: 0, speed: 0, config: 0, dma: 0, id: 0, phy: fe10880
[    2.431019@0] USB (0) use clock source: XTAL input                           
[    2.619120@1] Indeed it is in host mode hprt0 = 00021501                     
[    2.636646@0] Core Release: 3.10a                                            
[    2.636685@0] Setting default values for core params                         
[    2.799095@1] usb 1-1: new high-speed USB device number 2 using dwc_otg      
[    2.800315@1] Indeed it is in host mode hprt0 = 00001101                     
[    3.001014@1] hub 1-1:1.0: USB hub found                                     
[    3.001360@1] hub 1-1:1.0: 4 ports detected                                  
[    3.039107@0] Using Buffer DMA mode                                          
[    3.039142@0] OTG VER PARAM: 1, OTG VER FLAG: 1                              
[    3.041468@0] Working on port type = OTG                                     
[    3.045374@0] Current port type: SLAVE                                       
[    3.049278@0] dwc_otg lm0: DWC OTG Controller                                
[    3.053447@0] dwc_otg lm0: new USB bus registered, assigned bus number 2     
[    3.060155@0] dwc_otg lm0: irq 62, io mem 0x00000000                         
[    3.065488@0] hub 2-0:1.0: USB hub found                                     
[    3.068955@0] hub 2-0:1.0: 1 port detected                                   
[    3.073243@0] Dedicated Tx FIFOs mode                                        
[    3.076959@0] using timer detect id change, ed074800                         
[    3.081772@0] boot_device_flag : 0                                           
[    3.084991@0] ===========================================amlnf_init:632,nandd
[    3.094522@0] Nand PHY driver Version: 1.01.001.0004 (c) 2013 Amlogic Inc.   
[    3.101391@0] amlnf_phy_init : amlnf init flag 0                             
[    3.106120@0] NAND device id: 2c 64 44 4b a9 0 0 0                           
[    3.110782@0] detect NAND device: B revision NAND 8GiB MT29F64G08CBABA       
[    3.158829@0] AML_NAND_NEW_OOB : new oob                                     
[    3.158867@0] bus_cycle=5, bus_timing=7,system=3.9ns,flash->T_REA =16,flash-5
[    3.165037@0] boot_device_flag = 0                                           
[    3.169624@0] NAND CKECK  : arg nbbt: arg_valid= 1, valid_blk_addr = 5, vali0
[    3.182671@0] NAND CKECK  : arg ncnf: arg_valid= 1, valid_blk_addr = 8, vali0
[    3.185783@0] nand shipped bbt at block 6                                    
[    3.208489@0] NAND CKECK  : arg nkey: arg_valid= 1, valid_blk_addr = 4, vali0
[    3.211653@0] i=0,register --- nand_key                                      
[    3.215024@0] nand adjust phy offset : block 4                               
[    3.219513@0] nand adjust phy offset : block 4                               
[    3.223956@0] nfcache    : offset: 0x000006000000 -0x000024800000 : partitone
[    3.233435@0] nfcode     : offset: 0x00002a800000 -0x000050000000 : partitone
[    3.242978@0] nfdata     : offset: 0x00007a800000 -0x000185800000 : partitone
[    3.252491@0] amlnand_add_nftl:                                              
[    3.255583@0] Creating 1 ntd partitions                                      
[    3.259420@0] block_num 146                                                  
[    3.278129@0] ------init_ntd                                                 
[    3.278468@0] ntd: Giving out device 0 to nfcache                            
[    3.280098@0] Creating 5 ntd partitions                                      
[    3.283885@0] block_num 320                                                  
[    3.321505@0] ntd: Giving out device 1 to nfcode                             
[    3.321546@0] Creating 1 ntd partitions                                      
[    3.324313@0] block_num 1558                                                 
[    3.329457@1] usb 1-1.2: new full-speed USB device number 3 using dwc_otg    
[    3.435360@1] input: 2.4G  Wireless Receiver  as /devices/lm1/usb1/1-1/1-1.20
[    3.438952@1] hid-generic 0003:1915:AF11.0001: input: USB HID v1.11 Keyboard0
[    3.453075@1] input: 2.4G  Wireless Receiver  as /devices/lm1/usb1/1-1/1-1.21
[    3.459317@1] hid-generic 0003:1915:AF11.0002: input: USB HID v1.11 Mouse [21
[    3.471905@1] hid-generic 0003:1915:AF11.0003: device has no listeners, quitg
[    3.515938@0] ntd: Giving out device 2 to nfdata                             
[    3.516415@0] ethernet_driver probe!                                                                                         
[    5.899068@3] aml audio hp unpluged                                          
[    6.102494@0] switch_vpu_mem_pd: viu_vd1 OFF                                 
[    6.102518@0] switch_vpu_mem_pd: di_post OFF                                 
[    6.105369@0] switch_vpu_mem_pd: viu_vd2 OFF                                 
[    6.109617@0] switch_vpu_mem_pd: pic_rot2 OFF                                
[    6.113951@0] switch_vpu_mem_pd: pic_rot3 OFF                                
[    6.289300@3] ========  temp=29                                              
[    6.462106@3] [RN5T618]battery vol change: 0->0                              
[    7.289179@3] ========  temp=30                                              
[    8.289180@3] ========  temp=30                                              
Sending discover...                                                             
[    9.289299@3] ========  temp=30                                              
[    9.369188@3] libphy: 0:00 - Link is Up - 100/Full                           
[    9.369221@3] IPv6: ADDRCONF(NETDEV_CHANGE): eth0: link becomes ready        
[    9.374788@3] changed the Multicast,mcount=3                                 
[    9.378999@3] add mac address:33:33:00:00:00:01,bit=1                        
[    9.384032@3] add mac address:01:00:5e:00:00:01,bit=32                       
[    9.389144@3] add mac address:33:33:ff:06:44:bb,bit=3                        
[    9.394166@3] set hash low=a,high=1                                          
[    9.397634@3] changed the filter setting to :4                               
[   10.289182@3] ========  temp=30                                              
[   11.289178@3] ========  temp=31                                              
Sending discover...                                                             
[   12.289180@3] ========  temp=31                                              
Sending select for 192.168.0.106...                                             
Lease of 192.168.0.106 obtained, lease time 7200                                
[   12.961997@0] changed the Multicast,mcount=3                                 
[   12.962078@0] add mac address:33:33:00:00:00:01,bit=1                        
[   12.967125@0] add mac address:01:00:5e:00:00:01,bit=32                       
[   12.972241@0] add mac address:33:33:ff:06:44:bb,bit=3                        
deleting routers                                                                
route: SIOCDELRT: No such process                                               
adding dns 192.168.0.1                                                          
                                                                              
Mounting NFS rootfs...                                                          
Switching root...                                                               
[   13.289196@3] ========  temp=31                                              
[   14.289202@3] ========  temp=31                                              
[   14.344976@1] udevd[134]: starting version 182                               
[   15.186849@0] FAT-fs (sda1): Volume was not properly unmounted. Some data ma.
[   15.289325@3] ========  temp=33                                              
[   16.289202@3] ========  temp=32                                              
                                                                                
Last login: Thu Apr 17 15:17:01 UTC 2014 on tty1                                
[   17.289217@3] ========  temp=34                                              
root@genericarmv7a:~# [   18.289331@3] ========  temp=32

`.split('\n');