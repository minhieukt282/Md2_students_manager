export class Student {
    private _name: string
    private _score: number

    constructor(name: string, score: number) {
        this._name = name;
        this._score = score;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }
}

class Manager {
    listStudents: Student[] = []
    countFail: number = 0
    listStudentMax: Student[] = []

    insertFirst(student: Student) {
        this.listStudents.unshift(student)
    }

    insertLast(student: Student) {
        this.listStudents.push(student)
    }

    showList(): Student[] {
        return this.listStudents
    }

    totalStudentFail(): number {
        this.listStudents.forEach(e => {
            if (e.score <= 5) this.countFail++
        })
        return this.countFail
    }

    listStudentMaxScore(): Student[] {
        let temp: Student

        for (let i = 0; i < this.listStudents.length; i++) {
            for (let j = i + 1; j < this.listStudents.length; j++) {
                if (this.listStudents[i].score < this.listStudents[j].score) {
                    temp = this.listStudents[i]
                    this.listStudents[i] = this.listStudents[j]
                    this.listStudents[j] = temp
                }
            }
        }

        for (let i = 0; i < this.listStudents.length; i++) {
            if (this.listStudents[i].score == this.listStudents[0].score)
                this.listStudentMax.push(this.listStudents[i])
        }
        return this.listStudentMax
    }

    findByName(name: string): any {
        let flag: number = -1
        this.listStudents.forEach((e, index) => {
            if (e.name == name) flag = index
        })
        if (flag != -1) return this.listStudents[flag]
        else return "Error Name"
    }

}

function randomChar(length: number): string {
    let result: string = '';
    let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            characters.length));
    }
    return result;
}

let manager = new Manager()
let numberStudent: number = 10
for (let i: number = 0; i < numberStudent; i++) {
    manager.listStudents[i] = new Student(randomChar(4), Math.floor(Math.random() * 10))
    manager.insertLast(manager.listStudents[i])
}
console.log(manager.showList())
console.log(manager.listStudentMaxScore())
console.log(manager.findByName("huvk"))



