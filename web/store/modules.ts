import { action, computed, observable, makeObservable, runInAction } from "mobx";
// types
import { RootStore } from "./root";
// services
import { ProjectServices } from "services/project.service";
import { ProjectIssuesServices as IssueServices } from "services/issues.service";

export interface IModuleStore {
  loader: boolean;
  error: any | null;

  moduleId: string | null;

  setModuleId: (moduleSlug: string) => void;
}

class ModuleStore implements IModuleStore {
  loader: boolean = false;
  error: any | null = null;

  moduleId: string | null = null;

  // root store
  rootStore;
  // services
  projectService;
  issueService;

  constructor(_rootStore: RootStore) {
    makeObservable(this, {
      loader: observable,
      error: observable.ref,

      moduleId: observable.ref,

      // computed

      // actions
      setModuleId: action,
    });

    this.rootStore = _rootStore;
    this.projectService = new ProjectServices();
    this.issueService = new IssueServices();
  }

  // computed

  // actions
  setModuleId = (moduleSlug: string) => {
    this.moduleId = moduleSlug ?? null;
  };
}

export default ModuleStore;
