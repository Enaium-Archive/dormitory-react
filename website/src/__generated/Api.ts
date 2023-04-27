import type { Executor } from './';

import { AbsentController, BuildingController, DormitoryController, MenuController, MigrateController, OperatorController, RoleController, StateController, StudentController } from './services';

export class Api {
    
    readonly absentController: AbsentController;
    
    readonly buildingController: BuildingController;
    
    readonly dormitoryController: DormitoryController;
    
    readonly menuController: MenuController;
    
    readonly migrateController: MigrateController;
    
    readonly operatorController: OperatorController;
    
    readonly roleController: RoleController;
    
    readonly stateController: StateController;
    
    readonly studentController: StudentController;
    
    constructor(executor: Executor) {
        this.absentController = new AbsentController(executor);
        this.buildingController = new BuildingController(executor);
        this.dormitoryController = new DormitoryController(executor);
        this.menuController = new MenuController(executor);
        this.migrateController = new MigrateController(executor);
        this.operatorController = new OperatorController(executor);
        this.roleController = new RoleController(executor);
        this.stateController = new StateController(executor);
        this.studentController = new StudentController(executor);
    }
}