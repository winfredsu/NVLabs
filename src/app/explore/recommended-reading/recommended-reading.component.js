var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
var RecommendedReadingComponent = /** @class */ (function () {
    function RecommendedReadingComponent(title) {
        this.reviewPapers = [
            { abbr: 'DAC15',
                author: 'Liu, Yongpan, et al.',
                title: '"Ambient energy harvesting nonvolatile processors: from circuit to system."',
                booktitle: 'Proceedings of the 52nd Annual Design Automation Conference',
                year: 2015,
                link: 'https://scholar.google.com/scholar?hl=en&q=Ambient+energy+harvesting+nonvolatile+processors%3A+from+circuit+to+system&btnG=&as_sdt=1%2C5&as_sdtp='
            },
            { abbr: 'DATE17',
                author: 'Su, Fang, et al.',
                title: '"Nonvolatile processors: Why is it trending?."',
                booktitle: 'Design, Automation & Test in Europe Conference & Exhibition (DATE)',
                year: 2017,
                link: 'https://scholar.google.com/scholar?q=nonvolatile+processors%3A+why+is+it+trending&btnG=&hl=en&as_sdt=0%2C5'
            }
        ];
        this.devicePapers = [
            { abbr: 'DAC15',
                author: 'Liu, Yongpan, et al.',
                title: '"Ambient energy harvesting nonvolatile processors: from circuit to system."',
                booktitle: 'Proceedings of the 52nd Annual Design Automation Conference',
                year: 2015,
                link: 'https://scholar.google.com/scholar?hl=en&q=Ambient+energy+harvesting+nonvolatile+processors%3A+from+circuit+to+system&btnG=&as_sdt=1%2C5&as_sdtp='
            },
            { abbr: 'DATE17',
                author: 'Su, Fang, et al.',
                title: '"Nonvolatile processors: Why is it trending?."',
                booktitle: 'Design, Automation & Test in Europe Conference & Exhibition (DATE)',
                year: 2017,
                link: 'https://scholar.google.com/scholar?q=nonvolatile+processors%3A+why+is+it+trending&btnG=&hl=en&as_sdt=0%2C5'
            }
        ];
        this.archtecturePapers = [
            { abbr: 'DAC15',
                author: 'Liu, Yongpan, et al.',
                title: '"Ambient energy harvesting nonvolatile processors: from circuit to system."',
                booktitle: 'Proceedings of the 52nd Annual Design Automation Conference',
                year: 2015,
                link: 'https://scholar.google.com/scholar?hl=en&q=Ambient+energy+harvesting+nonvolatile+processors%3A+from+circuit+to+system&btnG=&as_sdt=1%2C5&as_sdtp='
            },
            { abbr: 'DATE17',
                author: 'Su, Fang, et al.',
                title: '"Nonvolatile processors: Why is it trending?."',
                booktitle: 'Design, Automation & Test in Europe Conference & Exhibition (DATE)',
                year: 2017,
                link: 'https://scholar.google.com/scholar?q=nonvolatile+processors%3A+why+is+it+trending&btnG=&hl=en&as_sdt=0%2C5'
            }
        ];
        this.systemPapers = [
            { abbr: 'ESSCIRC12, The First Nonvolatile Processor',
                author: 'Wang, Yiqun, et al.',
                title: '"A 3us wake-up time nonvolatile processor based on ferroelectric flip-flops."',
                booktitle: 'Proceedings of ESSCIRC',
                year: 2012,
                link: 'https://scholar.google.com/scholar?q=A+3us+wake-up+time+nonvolatile+processor+based+on+ferroelectric+flip-flops&btnG=&hl=en&as_sdt=0%2C5'
            },
            { abbr: 'ISSCC14, MRAM-Based Nonvolatile Processor',
                author: 'Sakimura, Noboru, et al.',
                title: '"A 90nm 20MHz fully nonvolatile microcontroller for standby-power-critical applications."',
                booktitle: 'Solid-State Circuits Conference Digest of Technical Papers (ISSCC)',
                year: 2014,
                link: 'https://scholar.google.com/scholar?q=A+90nm+20MHz+Fully+Nonvolatile+Microcontroller+for+Standby-+Power-Critical+Applications&btnG=&hl=en&as_sdt=0%2C5'
            },
            { abbr: 'ISSCC16, ReRAM-Based Nonvolatile Processor',
                author: 'Liu, Yongpan, et al.',
                title: '"A 65nm ReRAM-enabled nonvolatile processor with 6× reduction in restore time and 4× higher clock frequency using adaptive data retention and self-write-termination nonvolatile logic."',
                booktitle: 'Solid-State Circuits Conference Digest of Technical Papers (ISSCC)',
                year: 2016,
                link: 'https://scholar.google.com/scholar?q=4.7+A+65nm+ReRAM-enabled+nonvolatile+processor+with+6%C3%97+reduction+in+restore+time+and+4%C3%97+higher+clock+frequency+using+adaptive+data+retention+and+self-write-termination+nonvolatile+logic&btnG=&hl=en&as_sdt=0%2C5'
            },
            { abbr: 'VLSIC17, Nonvolatile System-On-Chip',
                author: 'Wang, Zhibo, et al.',
                title: '"A 130nm FeRAM-based parallel recovery nonvolatile SOC for normally-OFF operations with 3.9× faster running speed and 11× higher energy efficiency using fast power-on detection and nonvolatile radio controller."',
                booktitle: 'Symposium on VLSI Circuits',
                year: 2017,
                link: 'https://scholar.google.com/scholar?q=A+130nm+FeRAM-based+parallel+recovery+nonvolatile+SOC+for+normally-OFF+operations+with+3.9%C3%97+faster+running+speed+and+11%C3%97+higher+energy+efficiency+using+fast+power-on+detection+and+nonvolatile+radio+controller&btnG=&hl=en&as_sdt=0%2C5&as_ylo=2017'
            }
        ];
        title.setTitle('Recommended Reading | NVLabs');
    }
    RecommendedReadingComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'nvlabs-recommended-reading',
            templateUrl: './recommended-reading.component.html'
        }),
        __metadata("design:paramtypes", [Title])
    ], RecommendedReadingComponent);
    return RecommendedReadingComponent;
}());
export { RecommendedReadingComponent };
//# sourceMappingURL=recommended-reading.component.js.map