'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    general: {
        hogarth_producer: {
            type: String
        },
        hogarth_account: {
            type: String
        },
        project_name: {
            type: String
        },
        project_number: {
            type: Number
        },
        intended_markets: {
            type: [String]
        },
        delivered_via: {
            type: String
        },
        arrival_date: {
            type: Date
        },
        post_house_contact: {
            type: String
        },
        post_house_address: {
            type: String
        },
        assets_expected_for_qc: {
            video_files: {
                type: Boolean
            },
            artwork_pack_shots: {
                type: Boolean
            },
            after_effects_projects: {
                type: Boolean
            },
            protools_sessions: {
                type: Boolean
            },
            audio_files: {
                type: Boolean
            },
            flame_archive: {
                type: Boolean
            },
            nuke_setup: {
                type: Boolean
            },
            three_d_projects: {
                type: Boolean
            },
            other: {
                true_false: {
                    type: Boolean
                }
            }
        }
    },
    video_files: [{
        jobNumber: Number,
        report: [{
            version: {
                type: Number,
                default: 1,
            },
            qc_operator: {
                type: String
            },
            date: {
                type: Date
            },
            total_files_received: {
                type: Number
            },
            frame_rates: {
                a23967: String,
                b24: String,
                c25: String,
                d29976: String,
                other: String
            },
            standards: {
                SD_PAL: String,
                HD_PAL: String,
                SD_NTSC: String,
                HD_NTSC: String
            },
            aspect_ratios: {
                type: String
            },
            durations: {
                a10: String,
                b15: String,
                c20: String,
                d30: String,
                e60: String,
                f90: String,
                other: String
            },
            other_durations: {
                type: String
            },
            title_safety: {
                other: String,
                c16x9: String,
                b14x9: String,
                a4x3: String
            },
            master_generics: {
                master: {
                    type: String
                },
                generic: {
                    type: String
                },
                master_no_legals: {
                    type: String
                }
            },
            notes: {
                type: String
            },
            pass_fail: {
                type: String
            },
            codecs: {
                type: String
            }

        }]
    }],
    audio_files: [{
        jobNumber: Number,
        report: [{
            version: {
                type: Number,
                default: 1,
            },
            qc_operator: {
                type: String
            },
            date: {
                type: Date
            },
            splits: {
                included: Boolean,
                mono_stereo: String,
                twelve_frame_mute: Boolean,
                sample_rate: String
            },
            five_one: {
                included: Boolean,
                mono_stereo: String,
                twelve_frame_mute: Boolean,
                sample_rate: String
            },
            full_mix: {
                included: Boolean,
                twelve_frame_mute: Boolean,
                mono_stereo: String,
                sample_rate: String
            },
            file_type: {
                wav: String,
                aiff: String,
                mp3: String,
                other: String
            },
            notes: String,
            pass_fail: String
        }]
    }],
    after_effects: [{
        jobNumber: Number,
        report: [{
            version: {
                type: Number,
                default: 1,
            },
            ae_operator: String,
            date: Date,
            are_all_relevant_comps_editable: {
                yes_no: Boolean,
                notes: String
            },
            are_there_master_conforms: Boolean,
            are_there_master_renders: Boolean,
            frame_rates: {
                other: String,
                d29976: String,
                c25: String,
                b24: String,
                a23967: String
            },
            is_project_organized: {
                yes_no: Boolean,
                notes: String
            },
            are_there_missing_plugins: {
                yes_no: Boolean,
                notes: String
            },
            notes: String,
            pass_fail: String
        }]
    }],
    artwork_pack_shots: [{
        jobNumber: Number,
        report: [{
            version: {
                type: Number,
                default: 1,
            },
            operator: String,
            date: Date,
            is_project_organized: {
                yes_no: Boolean,
                notes: String
            },
            are_there_correct_files: {
                yes_no: Boolean,
                notes: String
            },
            are_all_relevant_comps_editable: {
                yes_no: Boolean,
                notes: String
            },
            are_there_missing_fonts: {
                yes_no: Boolean,
                notes: String
            },
            notes: String,
            pass_fail: String
        }]
    }],
    flame: [{
        jobNumber: Number,
        report: [{
            version: {
                type: Number,
                default: 1,
            },
            flame_operator: String,
            date: Date,
            are_there_missing_plugins: {
                yes_no: Boolean,
                notes: String
            },
            are_all_relevant_comps_editable: {
                yes_no: Boolean,
                notes: String
            },
            is_project_organized: {
                yes_no: Boolean,
                notes: String
            },
            were_setups_provided: Boolean,
            if_yes_what_format: {
                tar: Boolean,
                within: Boolean
            },
            are_setups_organized: {
                yes_no: Boolean,
                notes: String
            },
            are_there_master_conforms: Boolean,
            are_there_master_renders: Boolean,
            frame_rates: {
                a23967: String,
                b24: String,
                c25: String,
                d29976: String,
                other: String
            },
            notes: String,
            pass_fail: String
        }]
    }],
    nuke_projects: [{
        jobNumber: Number,
        report: [{
            version: {
                type: Number,
                default: 1,
            },
            nuke_operator: String,
            date: Date,
            are_there_missing_plugins: {
                yes_no: Boolean,
                notes: String
            },
            are_there_missing_fonts: {
                yes_no: Boolean,
                notes: String
            },
            are_all_setups_clearly_labeled: {
                yes_no: Boolean,
                notes: String
            },
            are_all_relevant_comps_editable: {
                yes_no: Boolean,
                notes: String
            },
            frame_rates: {
                a23967: String,
                b24: String,
                c25: String,
                d29976: String,
                other: String
            },
            notes: String,
            pass_fail: String
        }]
    }],
    three_d: [{
        jobNumber: Number,
        report: [{
            version: {
                type: Number,
                default: 1,
            },
            operator: String,
            date: Date,
            are_there_missing_plugins: {
                yes_no: Boolean,
                notes: String
            },
            are_all_relevant_builds_editable: {
                yes_no: Boolean,
                notes: String
            },
            are_there_missing_textures: {
                yes_no: Boolean,
                notes: String
            },
            are_all_labels_clearly_labeled: {
                yes_no: Boolean,
                notes: String
            },
            three_d_what_3d_program_was_used: String,
            frame_rates: {
                a23967: String,
                b24: String,
                c25: String,
                d29976: String,
                other: String
            },
            notes: String,
            pass_fail: String
        }]
    }],

    proTools: [{
        jobNumber: Number,
        report: [{
            version: {
                type: Number,
                default: 1,
            },
            proTools_operator: String,
            date: Date,
            are_there_missing_plugins: {
                yes_no: Boolean,
                notes: String
            },
            is_project_organized: {
                yes_no: Boolean,
                notes: String
            },
            notes: String,
            pass_fail: String
        }]
    }],
    other: [{
        jobNumber: Number,
        report: [{
            version: {
                type: Number,
                default: 1,
            },
            operator: String,
            date: Date,
            notes: String,
            pass_fail: String
        }]
    }]
})


mongoose.model('Reports', schema)
